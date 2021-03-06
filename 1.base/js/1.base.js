$(function(){
    var scene = new THREE.Scene();
    
    var camera = new THREE.PerspectiveCamera(45,
            window.innerWidth/window.innerHeight,0.1,1000);
    var renderer = new THREE.WebGLRenderer();
    //renderer.setClearColorHex(0xEEEEEE); 这个不知道为什么不能用
    renderer.setSize(window.innerWidth,window.innerHeight);

    //创建坐标轴
    var axes = new THREE.AxisHelper(50);
    scene.add(axes);
    //创建坐标轴结束
    //平台添加
    var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color:0xcccccc
    });
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);

    //绕着x轴转90度
    plane.rotation.x = -0.5*Math.PI;

    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    scene.add(plane);
    //平台结束
    //立方体
    var cubeGeometry = new THREE.CubeGeometry(4,4,4);
    var cubeMaterial = new THREE.MeshBasicMaterial({
        color:0xff0000,
        wireframe:true,
    });
    var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);

    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    scene.add(cube);
    //立方体结束
    //球体
    var sphereGeometry = new THREE.SphereGeometry(4,20,20);
    var sphereMaterial = new THREE.MeshBasicMaterial({
        color:0x7777ff,
        wireframe:true,
    })
    var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    scene.add(sphere);
    //球体结束


    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    $("#WebGL-output").append(renderer.domElement);
    renderer.render(scene,camera);
})