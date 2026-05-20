router.post('/courses', async (req, res) => {
    const { nombre, materia } = req.body;
    if (!nombre || !materia) {
        return res.status(400).json({ error: 'Nombre y Materia son requeridos' });
    }
    newCourse = { id: courses.length++, nombre, materia };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

router.get('/courses', async (req, res) => {
    res.json(courses);
});

router.put('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, materia } = req.body;
    const course = courses.find(c => c.id === parseInt(id));

    if (!course) {
        return res.status(404).json({ error: 'Curso no encontrado' });
    }
    course.nombre = nombre;
    course.materia = materia;
    res.json(course);
});

router.delete('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const courseIndex = courses.findIndex(c => c.id === parseInt(id));

    if (courseIndex === -1) {
        return res.status(404).json({ error: 'Curso no encontrado' });
    }

    courses.splice(courseIndex, 1);
    res.status(200).json({ message: 'Curso eliminado' });
});