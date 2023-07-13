'use client';
import ThreeView from "@/components/three/Three";
import Main from "@/components/main/MainStyle";
import Particle from "@/components/tsparticle/Particle";

export default function Home() {
  return (
      <Main.Inner>
        {/* <Main.ThreeContainer>
          <ThreeView />
        </Main.ThreeContainer> */}
        <Particle />
      </Main.Inner>
  )
}
