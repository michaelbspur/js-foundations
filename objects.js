const course = {
    name: 'JavaScript Foundations', 
    Instructors: ['Brandon', 'Shane', 'Mike'], 
    Students: [
        {
            name: 'Donna', 
            computer: {
                OS: 'Linux',
                type: 'Laptop'
            }
        },
        {
            name: 'Alex', 
            computer: {
                OS: 'macOS',
                type: 'iMac'
        }

        },
        {
            name: 'Linda', 
            computer: {
                OS: 'unix',
                type: 'mainframe'
            }
        }
    ]
    
}; 

const name = 'JavaScript Foundations';
const teacher = 'Shane';
const student = 'Donna';
const computerType = 'iMac'; 

console.log('Course Name:', name); 
console.log('Second teacher:', teacher);
console.log('First Student', student);
console.log('Alex\'s computer type:', computerType);

const coolStudents = []
for (let i=0; i<course.Students.length; i++) {
    if ( type = 'iMac') {
        coolStudents.push('name'); 
    }
}
console.log('Students using macOS:', coolStudents);