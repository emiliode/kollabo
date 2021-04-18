import java.util.Scanner;
public class Main {

  public static void main (String[] args){
    Scanner mySc = new Scanner(System.in);
    System.out.println("Hello World");
    System.out.println("Wer kann das lesen?");
    String auswahl = mySc.nextLine();
    switch (auswahl) {
      case "Joshua":
      case "joshua":
        break;
      case "Emil":
      case "emil":
        break;
      default:
      break;
    }
  }
}
