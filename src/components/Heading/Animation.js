import React from 'react'
import * as THREE from 'three'

const bg = '#2D2D2A'
const vertexHeight = 15000
const plane_set = { siz: 1245000, def: 100, color: '#394053' } 

class Animation {
  constructor() {
    this._camera = new THREE.PerspectiveCamera(55, 0, 1, 400000)
    this._camera.position.y = 10000
    this._camera.position.z = 10000

    this._scene = new THREE.Scene()
    this._scene.fog = new THREE.Fog(bg, 1, 300000)

    this._plane_geo = new THREE.PlaneGeometry(plane_set.siz, plane_set.siz, plane_set.def, plane_set.def)
    this._plane = new THREE.Mesh(this._plane_geo, new THREE.MeshBasicMaterial({ color: plane_set.color, wireframe: true }))
    this._plane.rotation.x -= Math.PI * 0.5

    this._plane_geo.vertices = this._plane_geo.vertices.map(vert => {
      vert.z += Math.random() * vertexHeight - vertexHeight;
      vert._myZ = vert.z
      return vert
    })

    this._scene.add(this._plane)
  }

  get attached() {
    return this._container !== undefined
  }

  setCamera(w, h) {
    this._camera.aspect = w / h
    this._camera.updateProjectionMatrix()
  }

  setRenderer(w, h) {
    this._renderer.setSize(w, h)
  }

  attach(container) {
    this._count = 0
    this._container = container
    const { clientWidth, clientHeight } = this._container
    this._renderer = new THREE.WebGLRenderer({ alpha: false })
    this._renderer.setClearColor(bg, 1)

    this.setCamera(clientWidth, clientHeight)
    this.setRenderer(clientWidth, clientHeight)

    this._container.appendChild(this._renderer.domElement)

    this.__render()
    window.addEventListener('resize', this.onResize.bind(this), false)
  }

  dispose() {
    window.removeEventListner('resize', this.onResize.bind(this))
    this._container.removeChild(this._renderer.domElement)
    this._container = null
    this._count = 0
  }
  
  onResize({ target }) {
    const { clientWidth, clientHeight } = this._container
    this.setCamera(clientWidth, clientHeight)
    this.setRenderer(clientWidth, clientHeight)
  } 

  __render() {
    requestAnimationFrame(() => this.__render())

    var x = this._camera.position.x
    var z = this._camera.position.z
    this._camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10
    this._camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10
    this._camera.lookAt(new THREE.Vector3(0, 8000, 0))

    this._plane_geo.vertices = this._plane_geo.vertices.map((vert, i) => {
      vert.z = Math.sin(i + this._count * 0.00002) * (vert._myZ - vert._myZ * 0.6)
      this._plane.geometry.verticesNeedUpdate = true

      this._count += 0.1
      return vert
    })

    this._renderer.render(this._scene, this._camera)
  }
}

export const useAnimation = ref => {
  const [ animInstance ] = React.useState(new Animation())
  React.useEffect(() => {
    if (ref.current && !animInstance.attached) {
      animInstance.attach(ref.current)
    }
  }, [ref.current])
}