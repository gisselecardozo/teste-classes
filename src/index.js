//import { Vector3 } from 'src/teste/view/three'
import {Tface} from './classes/Tface'
import {Tponto} from './classes/Tponto'
import * as THREE from 'three'


let objPtA = {
    nome:'A',
    x:1,
    y:1,
    z:1
}
let objPtB = {
    nome:'B',
    x:1,
    y:5,
    z:1
}
let objPtC = {
    nome:'C',
    x:5,
    y:5,
    z:1
}
let objPtD = {
    nome:'D',
    x:5,
    y:1,
    z:1
}

let arrOjtPt = [objPtA,objPtB,objPtC,objPtD]
//console.log(arrOjtPt)
var arrTponto = []
for(var i= 0;arrOjtPt.length>i;i++){
    var prov = arrOjtPt[i]
    var nome = arrOjtPt[i].nome
    var coord = new THREE.Vector3(arrOjtPt[i].x,arrOjtPt[i].y,arrOjtPt[i].z)
      
    //console.log(coord)
    prov = new Tponto(nome, coord)
    //console.log(prov)
    arrTponto.push(prov)
}
//console.log(arrTponto)
var arrFaces = ['A','B','C','D']


var face = new Tface('1', arrTponto, arrFaces)
face.criaFace()
//console.log(face.criaFace())