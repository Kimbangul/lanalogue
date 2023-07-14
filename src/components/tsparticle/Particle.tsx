'use client'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import config from "@/components/tsparticle/config";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // await loadFull(engine);
    await loadFireflyPreset(engine);
}, []);

const options = {
    preset: "firefly",
    shape: {
        type: "square", // starting from v2, this require the square shape script
      },
  };

const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
}

export default Particle;