'use strict'

// Classe Tface
// Representa visualmente o face

//three
import * as THREE from 'three'
import { Object3D } from 'three/src/core/Object3D.js'
import { Vector3 } from 'three/src/math/Vector3';



	/**
	 * @param nome: string
   * @param arrTponto = []
   * @param arrFaces = []
	*/

class Tface extends Object3D {
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
/* recebe o array de pontos e o array com o nomes dos pontos de cada face, compara ambos 
e separa os pontos de cada face determina a normal de cada face, cria a malha da mesma e adiciona na cena.
*/

  //intersect array of point names with Tponto array (vector3)
 criaFace(){
  this.points=[]
  this.arrFaces.forEach((elemento) => {
          this.arrPt.forEach((e)=>{
           if(e.nome == elemento){
            this.pontV = new THREE.Vector3(e.X,e.Y,e.Z)
            this.points.push(this.pontV)
        }
      })
      
})

  //determines the normal of the faces
  this.triangulo = new THREE.Triangle(this.points[2], this.points[1], this.points[0])
  this.normal = new THREE.Vector3();
  this.triangulo.getNormal(this.normal);
 
  this.baseNormal = new Vector3(0,0,1);
  
  this.q = new THREE.Quaternion().setFromUnitVectors(this.normal, this.baseNormal);
  

  //aplica a normal aos pontos 
  this.tempPoints = [];
  this.points.forEach(p => {
  this.tempPoints.push(p.clone().applyQuaternion(this.q));
  
  })


  //generates the face mesh
  this.shape = new THREE.Shape(this.tempPoints);
  this.shapeGeom = new THREE.ShapeGeometry(this.shape);
  this.mesh = new THREE.Mesh(this.shapeGeom, new THREE.MeshBasicMaterial({
   color: 0xfcee2b,
    side: THREE.DoubleSide,
     transparent: true,
     opacity: .6,
     wireframe: false
   }));

     this.mesh.geometry.vertices = this.points;
     this.name = String
     this.mesh.name

     //add face to the scene
 
    this.add(this.mesh);

    //cria as arestas do solido
    this.geom = new THREE.BufferGeometry().setFromPoints(this.points);
    this.matLines = new THREE.LineBasicMaterial({color: "black"});
    this.lines = new THREE.LineLoop(this.geom, this.matLines);
    this.lines.name = "line"+ String(this.name);
    this.add(this.lines);
  
    

   }
dispose() {//libera a memória
  this.children.forEach(element => {
    element.material.dispose();
    element.geometry.dispose();
  });
  this.children = [];
}
update( nome, pt ) {//atualiza o ponto: nome e posição
  this.nome = nome;
  this.children.forEach(element => {
    element.position.copy(pt);
  });
}}


export { Tface };