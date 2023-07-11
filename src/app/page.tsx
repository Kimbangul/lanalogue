'use client';
import ThreeView from "@/components/three/Three";
import Main from "@/components/main/MainStyle";

export default function Home() {
  return (
      <Main.Inner>
        <Main.ThreeContainer>
          <ThreeView />
        </Main.ThreeContainer>
      </Main.Inner>
  )
}
