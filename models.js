// models.js
export class Student {
  constructor(id, name, courses = []) {
    // Make id immutable (read-only + non-configurable)
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      enumerable: true,
      configurable: false,
    });

    this.name = name;
    this.courses = Array.isArray(courses) ? courses : [];
  }

  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    if (!this.courses.length) return 0;

    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return total / this.courses.length;
  }
}
