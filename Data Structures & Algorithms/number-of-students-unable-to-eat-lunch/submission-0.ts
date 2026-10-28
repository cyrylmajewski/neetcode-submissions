class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let i = 0;

        while(sandwiches.length > 0 && i < students.length) {
            if (students[0] === sandwiches[0]) {
                students.shift()
                sandwiches.shift()
                i = 0;
            } else {
                const student = students.shift();
                students.push(student);
                i++;
            }
        }

        return students.length
    }
}
