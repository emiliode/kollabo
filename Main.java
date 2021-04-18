import java.util.Scanner;
public class Main {

  public static void main (String[] args){
    Scanner mySc = new Scanner(System.in);
    System.out.println("Hello World");
    System.out.println("Wer kann das lesen?");
    String eingabe = mySc.nextLine();
    System.out.println("Hallo " + eingabe);
    mySc.close();
  }
}
