'use strict'
// Classe Tface
// Representa visualmente o face

//three
import * as THREE from 'three'
import {Tponto} from './Tponto'


	/**
	 * @param nome: string
   * @param arrTponto = []
   * @param arrFaces = []
	*/

class Tface extends Tponto {
  constructor( nome, arrTponto, arrFaces ) { //Parametros: string, Vector3(X,Y,Z)

		super();

		this.type = 'Tface';
    //name of face
    this.nome = nome;
    //receives  Tpontos array  
    this.arrPt = arrTponto;
    //receives array of points name that makes up the face
    this.arrFaces = arrFaces
}

criaFace(){
  //intersect array of point names with Tponto array (vector3)
  console.log('passou1')
  this.points=[]
  console.log(this.points,this.arrPt,this.arrFaces)
  this.arrFaces.forEach((elemento) => {
    console.log(elemento)
      this.arrPt.forEach((e)=>{
        if(e.nome == elemento){
          this.points.push(this.arrPt)
        }
      })
})
console.log(this.points)
  //determines the normal of the faces
  this.triangulo = new THREE.Triangle(this.points[2], this.points[1], this.points[0])
  this.normal = new THREE.Vector3();
  this.triangulo.getNormal(this.normal);
  //console.log(triangulo)
  this.baseNormal = new THREE.Vector3(0, 0, 1);
  

  this.quaternion = new THREE.Quaternion().setFromUnitVectors(this.normal, this.baseNormal);
  

  this.tempPoints = [];
  this.points.forEach(p => {
  this.tempPoints.push(p.clone().applyQuaternion(quaternion));
  })


  //generates the face mesh
  this.shape = new THREE.Shape(tempPoints);
  this.shapeGeom = new THREE.ShapeGeometry(shape);
  this.mesh = new THREE.Mesh(shapeGeom, new THREE.MeshBasicMaterial({
   color: 0xfcee2b,
    side: THREE.DoubleSide,
     transparent: true,
     opacity: .6,
     wireframe: false
   }));

     this.mesh.geometry.vertices = points;
     this.name = String
     this.mesh.name
     //add face to the scene
    this.add(mesh);
}
}

export { Tface };