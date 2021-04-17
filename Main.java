public class Main {

  public static void main (String[] args){
    // switch 
    System.out.println("Hello World");
    System.out.println("Wer kann das lesen?");
    String auswahl = Kon.readString();
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
