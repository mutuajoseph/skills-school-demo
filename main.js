let students = [
    { id: 1, name: "Alistair Montgomery", course: 'Classical Humanities & Philosophy', verified: true },
    { id: 2, name: "Beatrice Sinclair", course: 'Renaissance Art & Culture', verified: false },
    { id: 3, name: "Cassandra Hawthorne", course: 'Medieval Literature & History', verified: true },
    { id: 4, name: "Dorian Blackwood", course: 'Ancient Civilizations & Mythology', verified: false },
    { id: 5, name: "Evelyn Ashford", course: 'Philosophy of Science & Ethics', verified: true }
]

const createStudentCard = (student) => {

    const { id, name, course, verified } = student;
    let color = "#8b5cf6"

    const initials = student.name.split(' ').map(name => name[0]).join('');

    return `
       <div class="student-card" data-id="${id}">
            <div class="student-info">
                <div class="student-avatar" style="background-color: ${color}">
                    ${initials}
                </div>
                <div>
                    <div class="student-name">${name}</div>
                    <div class="student-course">${course}</div>
                </div>
            </div>
            <div class="student-actions">
                ${verified ? '<span class="badge">✅</span>' : '<span class="badge">❌</span>'}
                <button class="btn-delete" data-id="${id}" title="Remove student">🗑️</button>
            </div>
        </div>
    
    `

}

const renderStudents = () => {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML =  students.map(createStudentCard).join('');
}

renderStudents();

