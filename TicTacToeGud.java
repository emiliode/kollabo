import java.util.Scanner;
public class TicTacToeGud {
  static Scanner mySc= new Scanner(System.in);
  static char[] spielfeld = new char[9];
  static int spieleramzug = 1;
  static int eingabe;
  static int spielzuege;
  public static void gibtgewinner(){
    if ((spielfeld[0]=='X'&&spielfeld[1]=='X'&&spielfeld[2]=='X')||(spielfeld[0]=='X'&&spielfeld[3]=='X'&&spielfeld[6]=='X')||(spielfeld[0]=='X'&&spielfeld[4]=='X'&&spielfeld[8]=='X')||(spielfeld[1]=='X'&&spielfeld[4]=='X'&&spielfeld[7]=='X')||(spielfeld[2]=='X'&&spielfeld[5]=='X'&&spielfeld[8]=='X')||(spielfeld[2]=='X'&&spielfeld[4]=='X'&&spielfeld[6]=='X')||(spielfeld[3]=='X'&&spielfeld[4]=='X'&&spielfeld[5]=='X')||(spielfeld[6]=='X'&&spielfeld[7]=='X'&&spielfeld[8]=='X')) {
        System.out.println("\n~~~Glueckwunsch, Spieler 1 hat gewonnen~~~\n");
        spielzuege=10;
      }else if ((spielfeld[0]=='O'&&spielfeld[1]=='O'&&spielfeld[2]=='O')||(spielfeld[0]=='O'&&spielfeld[3]=='O'&&spielfeld[6]=='O')||(spielfeld[0]=='O'&&spielfeld[4]=='O'&&spielfeld[8]=='O')||(spielfeld[1]=='O'&&spielfeld[4]=='O'&&spielfeld[7]=='O')||(spielfeld[2]=='O'&&spielfeld[5]=='O'&&spielfeld[8]=='O')||(spielfeld[2]=='O'&&spielfeld[4]=='O'&&spielfeld[6]=='O')||(spielfeld[3]=='O'&&spielfeld[4]=='O'&&spielfeld[5]=='O')||(spielfeld[6]=='O'&&spielfeld[7]=='O'&&spielfeld[8]=='O')) {
          System.out.println("\n~~~Glueckwunsch, Spieler 2 hat gewonnen~~~\n");
          spielzuege=10;
      }
  } 
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
    System.out.println();
  }
  public static void spielZug(){
    spielfeldAusgeben();
    
    do{
      System.out.print("Spieler "+spieleramzug+" ist am Zug: ");
      eingabe=mySc.nextInt();
      eingabe=eingabe-1;
      if(eingabe< 0 ||eingabe>8){
        System.out.println("falsche Eingabe");
      }else if(spielfeld[eingabe]!='J'){
        System.out.println("falsche Eingabe, Feld belegt");
      }
    }
    while(eingabe< 0 ||eingabe>8||spielfeld[eingabe]!='J');
    if(spieleramzug==1){
        spielfeld[eingabe]='X';
        spieleramzug=2;
    }else if(spieleramzug==2){
        spielfeld[eingabe]='O';
        spieleramzug=1;
    }
    gibtgewinner();
    spielzuege++;
  }
  public static void main(String[]args) {
    for(int i=0;i<spielfeld.length;i++){    //spielfeld mit Standard wert Füllen
        spielfeld[i] = 'J';
    }
    boolean weiterSpielen=true;
     while(weiterSpielen){
        System.out.print("TicTacToe\n*********\n\nWählen sie aus zwischen\n\n1. TicTacToe 2-Spielermodus\n2. Programm beenden\n\nIhre Eingabe:");
        int auswahl=mySc.nextInt();
        if(auswahl==1){
            while(spielzuege<10){
                System.out.println();
                spielZug();
            }
        }else if(auswahl==2){
            weiterSpielen=false;
        }else{
            System.out.println("Unmoegliche Eingabe");
        }
     } 
  }  
}
