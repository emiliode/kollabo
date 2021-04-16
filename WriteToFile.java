import java.io.FileWriter;   // Import the FileWriter class
import java.io.IOException;  // Import the IOException class to handle errors

public class WriteToFile {
  public static void main(String[] args) {
    try {
      FileWriter myWriter = new FileWriter("Libary.txt");
      System.out.print("start:");
      int start = /*1000000000000000*/Kon.readInt();
      System.out.print("ende:");
      int ende = /*10000000000000000*/Kon.readInt();
      for(int i = start;i<ende;i++){
          i++;
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
