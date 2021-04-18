import java.util.Scanner;
public class TicTacToeGud {
  static Scanner mySc= new Scanner(System.in);
  static char[] spielfeld = new char[9];
  static int spieleramzug = 1;
  static int eingabe;
  
  public static void spielfeldAusgeben(){
    for(int i=0;i<spielfeld.length;i++){    
        if (spielfeld[i]=='J') {
            System.out.print(i+1); 
        } else {
            System.out.print(spielfeld[i]); 
        }
        if((i+1)%3==0){
            System.out.println();
        }else{
            System.out.print(" | ");
        }
    }
  }
  public static void spielZug(){
    spielfeldAusgeben();
    System.out.print("Spieler "+spieleramzug+" ist am Zug: ");
    eingabe=mySc.nextInt();
  }
  public static void main(String[]args) {
    for(int i=0;i<spielfeld.length;i++){    //spielfeld mit Standard wert Füllen
        spielfeld[i] = 'J';
    }
    boolean weiterSpielen=true;
     while(weiterSpielen){

     } 
  }  
}
