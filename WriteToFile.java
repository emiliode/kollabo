import java.io.FileWriter;   // Import the FileWriter class
import java.io.IOException;  // Import the IOException class to handle errors

public class WriteToFile {
  public static void main(String[] args) {
    try {
      FileWriter myWriter = new FileWriter("Libary.txt");
      boolean abfrage = true;
      int i = 0;
        while(abfrage){
          i++;
          myWriter.write(i + "\n");
          if(i/100000000 == 100000000){
            abfrage = false;
          }
        }
      myWriter.close();
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}
