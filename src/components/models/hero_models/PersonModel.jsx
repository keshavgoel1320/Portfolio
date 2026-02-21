import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function PersonModel(props) {
    try {
        const { scene } = useGLTF("/models/person.glb");
        return <primitive object={scene} {...props} />;
    } catch (error) {
        // If the model isn't provided yet, return null
        return null;
    }
}
