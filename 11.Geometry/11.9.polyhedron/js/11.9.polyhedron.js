
renderer.setClearColor(0xfcfcfc);
renderer.shadowMap.enabled = true;
//坐标加入
var axes = new THREE.AxisHelper(50);
scene.add(axes)

//环境光
var ambientlight = new THREE.AmbientLight(0x0c0c0c);
scene.add(ambientlight);

//锥形光
var spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(0,100,0);

//spotLight.target = plane;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 3000;
spotLight.shadow.mapSize.height = 3000;

scene.add(spotLight);

var torusKnotGeometry = new THREE.TorusKnotGeometry(15,1);
var torusKnotMaterial1 = new THREE.MeshNormalMaterial();
torusKnotMaterial1.side = THREE.DoubleSide;
var torusKnotMaterial2 = new THREE.MeshBasicMaterial({
    wireframe:true
});

var torusKnot = new THREE.SceneUtils.createMultiMaterialObject(torusKnotGeometry,[torusKnotMaterial1,torusKnotMaterial2]);

scene.add(torusKnot);

document.getElementById("webgl").appendChild(renderer.domElement);
render();
var step = 0;
function render(){

    animation()

    renderer.render(scene,camera);
    requestAnimationFrame(render)
}

function random(){
    var returnNum = Math.random()*100-50;
    return returnNum;
}

function animation(){
    controls.q += 0.01;
    if(controls.q<3||controls.q>30){
        controls.q = 3;
    }
    createSphere()
}
