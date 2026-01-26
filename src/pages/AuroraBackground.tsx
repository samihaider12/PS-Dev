import { useEffect, useRef, useState, useCallback } from "react";
import { Box, Slider, Typography, Switch, FormControlLabel, Stack } from "@mui/material";
import gsap from "gsap";

interface AuroraBackgroundProps {
  intensity?: number;
  speed?: number;
  colorScheme?: "classic" | "purple" | "pink" | "multicolor";
  interactive?: boolean;
  showControls?: boolean;
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  intensity = 0.8,
  speed = 1,
  colorScheme = "classic",
  interactive = true,
  showControls = false,
}) => {
  const layers = useRef<(HTMLDivElement | null)[]>([]);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [localIntensity, setLocalIntensity] = useState(intensity);
  const [localSpeed, setLocalSpeed] = useState(speed);
  const [isAnimating, setIsAnimating] = useState(true);

  const colorSchemes = {
    classic: [
      "rgba(0, 255, 180, 0.35)",
      "rgba(80, 120, 255, 0.25)",
      "rgba(0, 255, 200, 0.4)",
    ],
    purple: [
      "rgba(170, 0, 255, 0.4)",
      "rgba(100, 60, 255, 0.3)",
      "rgba(200, 100, 255, 0.45)",
    ],
    pink: [
      "rgba(255, 100, 200, 0.4)",
      "rgba(255, 60, 150, 0.3)",
      "rgba(255, 150, 220, 0.45)",
    ],
    multicolor: [
      "rgba(0, 255, 150, 0.4)",
      "rgba(100, 200, 255, 0.3)",
      "rgba(255, 100, 200, 0.4)",
    ],
  };

  const stars = Array.from({ length: 150 });
  const particles = Array.from({ length: 50 });

  const initAnimations = useCallback(() => {
    if (!isAnimating) return;

    // Clear existing animations
    layers.current.forEach((el) => {
      if (el) gsap.killTweensOf(el);
    });

    particlesRef.current.forEach((el) => {
      if (el) gsap.killTweensOf(el);
    });

    // Aurora layer animations
    layers.current.forEach((el, i) => {
      if (!el) return;

      const duration = (18 + i * 6) / localSpeed;
      const waveDuration = (12 + i * 3) / localSpeed;

      gsap.to(el, {
        backgroundPosition: `${100 + i * 60}% 50%`,
        duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(el, {
        y: i % 2 === 0 ? -60 : 60,
        duration: waveDuration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Additional subtle horizontal movement
      gsap.to(el, {
        x: i % 2 === 0 ? 40 : -40,
        duration: waveDuration * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // Particle animations
    particlesRef.current.forEach((el, i) => {
      if (!el) return;

      const delay = i * 0.2;
      const particleDuration = (15 + Math.random() * 10) / localSpeed;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: -20,
          x: Math.random() * 100 - 50,
        },
        {
          opacity: 0.3 + Math.random() * 0.3,
          y: `+=${100 + Math.random() * 200}`,
          x: `+=${Math.random() * 100 - 50}`,
          duration: particleDuration,
          delay,
          repeat: -1,
          repeatDelay: Math.random() * 2,
          ease: "sine.inOut",
        }
      );
    });

    // Mouse interaction
    if (containerRef.current && interactive) {
      containerRef.current.onmousemove = (e) => {
        const { clientX, clientY } = e;
        const { width, height } = containerRef.current!.getBoundingClientRect();
        
        const x = (clientX / width - 0.5) * 2;
        const y = (clientY / height - 0.5) * 2;

        layers.current.forEach((el, i) => {
          if (!el) return;
          
          gsap.to(el, {
            x: x * 20 * (i + 1),
            y: y * 20 * (i + 1),
            duration: 2,
            ease: "power2.out",
          });
        });
      };
    }
  }, [localSpeed, isAnimating, interactive]);

  useEffect(() => {
    initAnimations();
    return () => {
      layers.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
      particlesRef.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, [initAnimations]);

  useEffect(() => {
    setLocalIntensity(intensity);
  }, [intensity]);

  useEffect(() => {
    setLocalSpeed(speed);
  }, [speed]);

  return (
    <Box
      component="div"
      ref={containerRef}
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: interactive ? "auto" : "none",
        background: "radial-gradient(circle at bottom, #021016, #000 70%)",
        '&:hover': {
          cursor: interactive ? 'pointer' : 'default',
        },
      }}
    >
      {/* Stars */}
      {stars.map((_, i) => (
        <Box
          key={`star-${i}`}
          component="div"
          sx={{
            position: "absolute",
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "#fff",
            borderRadius: "50%",
            opacity: 0.5 + Math.random() * 0.5,
            animation: `twinkle ${3 + Math.random() * 7}s infinite alternate`,
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.2 },
              '50%': { opacity: 1 },
            },
          }}
        />
      ))}

      {/* Aurora layers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Box
          key={i}
          component="div"
          ref={(el) => {
            layers.current[i] = el as HTMLDivElement | null;
          }}
          sx={{
            position: "absolute",
            width: "200%",
            height: `${60 + i * 8}%`,
            left: "-50%",
            top: `${10 + i * 12}%`,
            background: `
              linear-gradient(120deg,
                transparent 0%,
                ${colorSchemes[colorScheme][i % 3]} 25%,
                ${colorSchemes[colorScheme][(i + 1) % 3]} 45%,
                ${colorSchemes[colorScheme][(i + 2) % 3]} 60%,
                transparent 80%)
            `,
            maskImage: `
              linear-gradient(to top, 
                transparent 0%, 
                black ${20 + i * 5}%, 
                black ${70 - i * 5}%, 
                transparent 100%)
            `,
            WebkitMaskImage: `
              linear-gradient(to top, 
                transparent 0%, 
                black ${20 + i * 5}%, 
                black ${70 - i * 5}%, 
                transparent 100%)
            `,
            filter: `blur(${60 + i * 10}px)`,
            opacity: 0.4 + (i * 0.1) * localIntensity,
            transform: `rotate(-${8 + i * 2}deg)`,
            backgroundSize: "400% 400%",
            mixBlendMode: "screen",
            willChange: "transform, background-position, filter",
          }}
        />
      ))}

      {/* Glowing particles */}
      {particles.map((_, i) => (
        <Box
          key={`particle-${i}`}
          component="div"
          ref={(el) => {
            particlesRef.current[i] = el as HTMLDivElement | null;
          }}
          sx={{
            position: "absolute",
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            background: colorSchemes[colorScheme][i % 3],
            borderRadius: "50%",
            filter: "blur(2px)",
            opacity: 0,
          }}
        />
      ))}

      {/* Horizon glow */}
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "40%",
          background: `
            radial-gradient(
              ellipse at center bottom, 
              ${colorSchemes[colorScheme][0].replace('0.4', '0.2')}, 
              transparent 80%
            )
          `,
          filter: "blur(80px)",
          opacity: 0.6 * localIntensity,
        }}
      />

      {/* Control Panel */}
      {showControls && (
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            background: "rgba(0, 20, 30, 0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            padding: 2,
            minWidth: 250,
            border: "1px solid rgba(0, 255, 200, 0.2)",
          }}
        >
          <Typography variant="h6" color="primary.light" gutterBottom>
            Aurora Controls
          </Typography>
          
          <Stack spacing={2}>
            <Box>
              <Typography variant="caption" color="grey.400">
                Intensity: {localIntensity.toFixed(2)}
              </Typography>
              <Slider
                value={localIntensity}
                onChange={(_, value) => setLocalIntensity(value as number)}
                min={0.1}
                max={1.5}
                step={0.1}
                sx={{ color: 'primary.light' }}
              />
            </Box>

            <Box>
              <Typography variant="caption" color="grey.400">
                Speed: {localSpeed.toFixed(2)}
              </Typography>
              <Slider
                value={localSpeed}
                onChange={(_, value) => setLocalSpeed(value as number)}
                min={0.1}
                max={3}
                step={0.1}
                sx={{ color: 'primary.light' }}
              />
            </Box>

            <FormControlLabel
              control={
                <Switch
                  checked={isAnimating}
                  onChange={(e) => setIsAnimating(e.target.checked)}
                  color="primary"
                />
              }
              label="Animation"
              sx={{ color: 'grey.400' }}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default AuroraBackground;
 