# 36

## resources

https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html

## setup
run server

`http-server . -p 8000`


## hooks?

1. create a shelf. 
2. export it to an obj
3. import an obj


## points

1. mesh.position.x = x, mesh.position.y = y, mesh.position.z = z - means the geometric center is at (x, y, z)
2. mesh is made from two things - a geometry and a material that needs applied on geometry.
3. A scene is made up of many meshes and a light.
4. renderer uses scene and camera to serve it in canvas.
5. In perspective camera, for a fixed renderer screen size, on increasing angle, size of the objects in focus are reduced. 