import java.util.Scanner;
public class TicTacToeBad{  
  public static void main(String[] args) {
    Scanner myObj= new Scanner(System.in);
    int spieleramzug,welchesfeld,i,weiterspielen,spiellaueft;
    boolean falscherzug=true;                         
    String[]felder=new String[9];                                                 //der String Array "felder" speichert die Informationen, welches Zeichen gesetzt wurde f�r jedes einzelne Feld
    boolean[]feldbelegt=new boolean[9]; 
    weiterspielen=1;
    while (weiterspielen==1) {                                                    //w�hrend der Spieler weiterspielen m�chte startet diese While-Schleife nach einer Runde von vorne
      spieleramzug=1;                                                             //Spieler 1 f�ngt an
      spiellaueft=0;                                                              //Spiel l�uft noch
      System.out.println("***TicTacToe***");
      System.out.println("M�gliche Felder:");
      System.out.println("1 | 2 | 3\n4 | 5 | 6\n7 | 8 | 9 ");                     //Spielfeld und Zahl der Felder
    
      for (i=0;i<9 ;i++ ) {                                                       
        felder[i]="-";                                                            //jeder Speicherzelle des Arrays wird "-" zugeteilt
        feldbelegt[i]=false;                                                      //jeder Speicherzelle des Arrays wird zugeteilt, dass das Feld noch nicht belegt ist.
      } // end of for
    
      System.out.print("Spieler "+spieleramzug+" ist am Zug: ");                  //Spieler 1 f�ngt an und w�hlt ein Feld aus:
      welchesfeld=myObj.nextInt();                                                  //das Feld, das ausgew�hlt wird, wird gespeichert
      felder[welchesfeld-1]="X";                                                  //dem Feld wird der Buchstabe X zugeteilt (Das Zeichen f�r Spieler 1)
      feldbelegt[welchesfeld-1]=true;                                             //es wird festgelegt, dass das ausgew�hlte Feld belegt ist
      
      for (i=0;i<7 ;i++ ) {
        System.out.println(felder[i]+" | "+felder[i+1]+" | "+felder[i+2]);        //Spielfeld wird nach dem Zug mit dem Gesetzten Zug ausgegeben
        i=i+2;
      } // end of for;
      spieleramzug=2;                                                             //Spieler 2 ist am Zug
      
      while (spieleramzug==2&&spiellaueft<4) {                                    //hier l�uft die Runde Bereits.  immer Wenn Spieler 2 am Zug ist und das Spiel noch l�uft 
                                                                                  //nach 4 Wiederholungen vorbei, da in jeder Wiederholung 2 Z�ge und 1 Zug bereits vorher
        while (falscherzug) {                                                     //wenn falscherzug true ist...wenn der Spieler einen Zug f�r ein Feld durchf�hrt, das schon belegt ist, f�ngt der Block von vorne an
          System.out.print("Spieler "+spieleramzug+" ist am Zug: ");
          welchesfeld=myObj.nextInt();
          if (!feldbelegt[welchesfeld-1]) {                                       //wenn das feld, dass der Spieler sich aussucht nicht belegtist, ist das Feld O
            felder[welchesfeld-1]="O";                                            
            feldbelegt[welchesfeld-1]=true;                                       //Feld wird als belegt markiert
      
            for (i=0;i<7 ;i++ ) {                                                 //gibt Spielfeld aus
              System.out.println(felder[i]+" | "+felder[i+1]+" | "+felder[i+2]);
              i=i+2;
            } // end of for;
            spieleramzug=1;                                                       //Spieler1 ist dran
            falscherzug=false;                                                        //der Zug war richtig, weiterimProgramm
          }else {
            System.out.println("Feld ist bereits belegt, Bitte w�hlen sie erneut!");
            falscherzug=true;                                                        //der Zug war falsch, die Schleife wird von vorne gestartet
           } // end of if-else // end of if
          }
        falscherzug=true;
                                                                                  //wenn eine der Gewinnm�glichkeiten erf�llt ist gewinnt Spieler1 bei X und Spieler2 bei O
        if ((felder[0]=="X"&&felder[1]=="X"&&felder[2]=="X")||(felder[0]=="X"&&felder[3]=="X"&&felder[6]=="X")||(felder[0]=="X"&&felder[4]=="X"&&felder[8]=="X")||(felder[1]=="X"&&felder[4]=="X"&&felder[7]=="X")||(felder[2]=="X"&&felder[5]=="X"&&felder[8]=="X")||(felder[2]=="X"&&felder[4]=="X"&&felder[6]=="X")||(felder[3]=="X"&&felder[4]=="X"&&felder[5]=="X")||(felder[6]=="X"&&felder[7]=="X"&&felder[8]=="X")) {
          spieleramzug=1;
          System.out.println("~~~Gl�ckwunsch, Spieler 1 hat gewonnen~~~");
        }else if ((felder[0]=="O"&&felder[1]=="O"&&felder[2]=="O")||(felder[0]=="O"&&felder[3]=="O"&&felder[6]=="O")||(felder[0]=="O"&&felder[4]=="O"&&felder[8]=="O")||(felder[1]=="O"&&felder[4]=="O"&&felder[7]=="O")||(felder[2]=="O"&&felder[5]=="O"&&felder[8]=="O")||(felder[2]=="O"&&felder[4]=="O"&&felder[6]=="O")||(felder[3]=="O"&&felder[4]=="O"&&felder[5]=="O")||(felder[6]=="O"&&felder[7]=="O"&&felder[8]=="O")) {
            spieleramzug=1;
            System.out.println("~~~Gl�ckwunsch, Spieler 2 hat gewonnen~~~");
         }  
    
        
        while (falscherzug) {
          System.out.print("Spieler "+spieleramzug+" ist am Zug: ");
          welchesfeld=myObj.nextInt();
          if (!feldbelegt[welchesfeld-1]) {
            felder[welchesfeld-1]="X";
            feldbelegt[welchesfeld-1]=true;
      
            for (i=0;i<7 ;i++ ) { //gibt Spielfeld aus
              System.out.println(felder[i]+" | "+felder[i+1]+" | "+felder[i+2]);
              i=i+2;
          } // end of for;
            spieleramzug=2;                                                       
            falscherzug=false;
          }else {
            System.out.println("Feld ist bereits belegt, Bitte w�hlen sie erneut!");
             
           } // end of if-else // end of if
          }  
        falscherzug=true;
        if ((felder[0]=="X"&&felder[1]=="X"&&felder[2]=="X")||(felder[0]=="X"&&felder[3]=="X"&&felder[6]=="X")||(felder[0]=="X"&&felder[4]=="X"&&felder[8]=="X")||(felder[1]=="X"&&felder[4]=="X"&&felder[7]=="X")||(felder[2]=="X"&&felder[5]=="X"&&felder[8]=="X")||(felder[2]=="X"&&felder[4]=="X"&&felder[6]=="X")||(felder[3]=="X"&&felder[4]=="X"&&felder[5]=="X")||(felder[6]=="X"&&felder[7]=="X"&&felder[8]=="X")) {
          spieleramzug=1;
          System.out.println("\n~~~Gl�ckwunsch, Spieler 1 hat gewonnen~~~\n");
        }else if ((felder[0]=="O"&&felder[1]=="O"&&felder[2]=="O")||(felder[0]=="O"&&felder[3]=="O"&&felder[6]=="O")||(felder[0]=="O"&&felder[4]=="O"&&felder[8]=="O")||(felder[1]=="O"&&felder[4]=="O"&&felder[7]=="O")||(felder[2]=="O"&&felder[5]=="O"&&felder[8]=="O")||(felder[2]=="O"&&felder[4]=="O"&&felder[6]=="O")||(felder[3]=="O"&&felder[4]=="O"&&felder[5]=="O")||(felder[6]=="O"&&felder[7]=="O"&&felder[8]=="O")) {
            spieleramzug=1;
            System.out.println("\n~~~Gl�ckwunsch, Spieler 2 hat gewonnen~~~\n");
        }else if (spiellaueft==3) {
            System.out.println("Unentschieden");
         }  
        spiellaueft++;                                                            //eine n�chste wiederholung geschieht bis spiellaueft=4
      }                                                                           //es wird gefragt ob weitergespielt werden m�chte, wenn ja geht die schleife von vorne los, wenn nicht endet das Programm
      System.out.println("\nNoch eine Runde Spielen? F�r Ja gebe 1, f�r Nein gebe 0!");
      weiterspielen=myObj.nextInt();
    }  
    System.out.println("TicTacToe wird beendet");
    myObj.close();
  }  
}
            
