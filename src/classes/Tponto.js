'use strict'
// Classe Tponto
// Representa visualmente o ponto

//import { mapGetters } from 'vuex';
//import { mapActions } from "vuex";
//import ResTracker from 'src/utils/3jsResTracker.js';

//three
import { Vector3 } from 'three/src/math/Vector3.js';
import { CylinderGeometry } from 'three/src/geometries/CylinderGeometry.js';
//import { Matrix4 } from 'three/src/math/Matrix4.js';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial.js';
import { Mesh } from 'three/src/objects/Mesh.js';
import { MathUtils } from 'three/src/math/MathUtils.js';
import { Object3D } from 'three/src/core/Object3D.js';

	/**
	 * @param nome: string
	 * @param pt: Vector3(x,y,z)
	 */
class Tponto extends Object3D {
  constructor( nome, pt ) { //Parametros: string, Vector3(X,Y,Z)

		super();

		this.type = 'Tponto';

		if ( pt === undefined ) pt = new Vector3( 0, 0, 0 );
		if ( nome === undefined ) nome = '';

		this.nome = nome;

		this.x = pt.x;
    this.y = pt.y;
    this.z = pt.z
    
    this.material = new MeshBasicMaterial({ color: 0x000000 });
    this.geometry = new CylinderGeometry(0.2, 0.2, 2, 6, 4, false);
    // Make a mesh with the geometry
    this.CylX = new Mesh(this.geometry, this.material);
    // Position it where we want
    this.CylX.position.copy(pt);
    this.CylX.rotateZ(MathUtils.degToRad(90));
    // And make it point to where we want
    this.add( this.CylX);
    this.CylY = new Mesh(this.geometry, this.material);
    // Position it where we want
    this.CylY.position.copy(pt);
    // And make it point to where we want
    this.add( this.CylY);
    // Make a mesh with the geometry
    this.CylZ = new Mesh(this.geometry, this.material);
    // Position it where we want
    this.CylZ.position.copy(pt);
    this.CylZ.rotateX(MathUtils.degToRad(90));
    // And make it point to where we want
    this.add( this.CylZ);

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
  }

}

export { Tponto };