import java.io.FileWriter;   // Import the FileWriter class
import java.io.IOException;  // Import the IOException class to handle errors

public class WriteToFile {
  public static void main(String[] args) {
    try {
      FileWriter myWriter = new FileWriter("Libary.txt");
      long start = 1000000000000000;
      System.out.print("start:" + start);
      long ende  = 10000000000000000;
      System.out.print("ende:" + ende);
      for(long i = start;i<ende;i++){
          myWriter.write(i + "\n");
          }
      myWriter.close();
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}
