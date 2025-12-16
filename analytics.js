export function calculateClassAverage(students, courseId) {
  const grades = students
    .map(s => s.courses.find(c => c.courseId === courseId))
    .filter(Boolean)
    .map(record => record.grade);

  if (!grades.length) return 0;

  const total = grades.reduce((sum, g) => sum + g, 0);
  return total / grades.length;
}

export function findTopStudent(students) {
  return students.reduce((best, current) => {
    return current.getAverage() > best.getAverage() ? current : best;
  });
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
