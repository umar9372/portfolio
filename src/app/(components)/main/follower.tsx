import { H4, H6 } from "@/components/basic/heading";
import { TOTAL_FOLLOWERS } from "@/constants/main";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useAppStore from "@/store/app";
import toast from "react-hot-toast";


const TotalFollowers = () => {
    const { isFinishedOnboarding } = useAppStore();
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [followersCount, setFollowersCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false); // Loading state

    useEffect(() => {
        if (isFinishedOnboarding) {
            animateFollowers();
        }
    }, [isFinishedOnboarding]);

    useEffect(() => {
        const fetchFollowersCount = async () => {

            try {
               
                const response = await fetch('/api/follow', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                  
                    const data = await response.json();
                    setFollowersCount(data.count);
                } else {
                    console.error('Failed to fetch followers count');
                }
            } catch (error) {
                console.error('Error fetching followers count:', error);
            }
        };

        fetchFollowersCount();
    }, []);

    const handleSectionClick = async () => {
        if (loading) return; // Prevent new requests if loading

        const follow = localStorage.getItem('follow');
        if (follow === '1') {
            toast.success('You already followed me', {
                style: {
                    backgroundColor: "#18181B",
                    color: "white",
                    fontSize: "16px",
                }
            });
            return; // Prevent further actions if already followed
        }

        setLoading(true); // Set loading to true

        try {
            await toast.promise(updateFollow(), {
                loading: 'Loading',
                success: 'Thank you for your following',
                error: 'Error occurred while following',
            });
            localStorage.setItem('follow', '1'); // Mark as followed
        } catch (error) {
            console.error('Error increasing followers count:', error);
        } finally {
            setLoading(false); // Reset loading after request
        }
    };

    const updateFollow = async () => {
        const response = await fetch('/api/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
        
            setFollowersCount(prevCount => prevCount + 1);
        } else {
            console.error('Failed to increase followers count');
        }
    }

    const animateFollowers = () => {
        gsap.from(sectionRef?.current, {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "power3.out",
        });

        gsap.from([headingRef?.current, imageRef?.current, contentRef?.current], {
            duration: 1,
            y: 20,
            opacity: 0,
            stagger: 0.3,
            ease: "power3.out",
            delay: 0.5,
        });
    };

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
            scale: 1.1,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
        });
    };

    const handleMouseLeave = () => {
        gsap.killTweensOf(imageRef.current); // Stop the animation on mouse leave
        gsap.to(imageRef.current, {
            scale: 1, // Reset scale
            duration: 0.3,
        });
    };

    return (
        <div ref={sectionRef}>
            <button
                className={`flex flex-col w-full items-center bg-card p-4 rounded-xl cursor-pointer transition-transform duration-500 hover:!scale-105`} // Adjust opacity if loading
                onClick={handleSectionClick}
                onMouseEnter={handleMouseEnter} // Trigger pulse animation
                onMouseLeave={handleMouseLeave} // Stop pulse animation
                disabled={loading}
            >
                <H6 className="mb-5" ref={headingRef}>
                    {TOTAL_FOLLOWERS?.title}
                </H6>
                <div className="relative flex items-center justify-center">
                    <Image
                        ref={imageRef}
                        src={TOTAL_FOLLOWERS?.imageSrc}
                        alt={TOTAL_FOLLOWERS?.imageAlt}
                        width={150}
                        height={150}
                    />
                </div>
                <div className="flex flex-col items-center pt-5" ref={contentRef}>
                    <H4>{followersCount}</H4>
                    <span className="font-mont">{followersCount} Users Followed</span>
                </div>
            </button>
        </div>
    );
};

export default TotalFollowers;
