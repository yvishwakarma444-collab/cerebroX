import java.util.Scanner;

class StudentMarksCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of subjects: ");
        int numSubjects = scanner.nextInt();
        int[] marks = new int[numSubjects];
        for (int i = 0; i < numSubjects; i++) {
            System.out.print("Enter marks for subject " + (i + 1) + ": ");
            marks[i] = scanner.nextInt();
        }
        int totalMarks = 0;
        for (int mark : marks) {
            totalMarks += mark;
        }
        double averageMarks = totalMarks / (double) numSubjects;
        System.out.println("Total Marks: " + totalMarks);
        System.out.println("Average Marks: " + averageMarks);
        String grade;
        if (averageMarks >= 90) {
            grade = "A+";
        } else if (averageMarks >= 80) {
            grade = "A";
        } else if (averageMarks >= 70) {
            grade = "B";
        } else if (averageMarks >= 60) {
            grade = "C";
        } else if (averageMarks >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        System.out.println("Grade: " + grade);
        scanner.close();
    }
}
