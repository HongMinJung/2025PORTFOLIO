import { Object3DNode } from '@react-three/fiber'
import { BufferGeometry, Group, Material, Mesh, Texture } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<Group, typeof Group>
      mesh: Object3DNode<Mesh, typeof Mesh>
      bufferGeometry: Object3DNode<BufferGeometry, typeof BufferGeometry>
      material: Object3DNode<Material, typeof Material>
      texture: Object3DNode<Texture, typeof Texture>
    }
  }
}