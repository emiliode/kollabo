import java.util.Scanner;
public class Ghost {
  public static void freeBlocksAround(char[][] chMap, int[][] coords, int frei){
    for (int i = 0; i < coords.length; i++) {
        int coordX= coords[i][0];
        int coordY= coords[i][1];
        if(chMap[coordX-1][coordY]==' '){
          frei++;
        }if(chMap[coordX][coordY-1]==' '){
          frei++;
        }if(chMap[coordX+1][coordY]==' '){
          frei++;
        }if(chMap[coordX][coordY+1]==' '){
          frei++;
        }
      }
      int[][]oldChoords=coords;
      coords=new int[frei][2];
      for (int i = 0; i < oldChoords.length; i++) {
        boolean keinFeldOben=true, keinFeldLinks=true, keinFeldUnten=true, keinFeldRechts = true;
        int coordX= coords[i][0];
        int coordY= coords[i][1];
        if(chMap[coordX-1][coordY]==' '&& keinFeldOben){
          coords[i][0]=chMap[coordX-1][coordY];
          keinFeldOben=false;
        }else if(chMap[coordX][coordY-1]==' '&& keinFeldLinks){
          coords[i][0]=chMap[coordX][coordY-1];
          keinFeldLinks=false;
        }else if(chMap[coordX+1][coordY]==' '&&keinFeldUnten){
          coords[i][0]=chMap[coordX+1][coordY];
          keinFeldUnten=false;
        }else if(chMap[coordX][coordY+1]==' '&&keinFeldRechts){
          coords[i][0]=chMap[coordX][coordY+1];
          keinFeldRechts = false;
        }
      }
  }
  public static int countGhosts(char[][] chMap){
    int gCounter=0;                       
    for (int y = 0; y < chMap.length; y++) {
      for (int j = 0; j < chMap[y].length; j++) {
        if(chMap[y][j]=='G'){gCounter++;}
        }
      }
      return gCounter;
  }
    public static void main(String[]args){                                                  //input:  Zahl N z.B. 8
        //int[][]coordinates;                                                               //########  
        Scanner myScanner = new Scanner(System.in);                                         //# #    #
        int N = Integer.parseInt(myScanner.nextLine());                                     //# # ## #
        String[]map=new String[N];                                                          //# #  #G#
        for(int i = 0; i<map.length; i++){                                                  //    P###
            map[i]=myScanner.nextLine();                                                    //#### # #
        }                                                                                   //#G   #G# 
        char[][] chMap = new char[map.length][];                                            //########
          for (int x = 0; x < map.length; x++) {                                            //G=Ghost P=Pacman #=Wand ' '=Freierweg
            chMap[x]=map[x].toCharArray();
          }
      
        
         System.out.println(countGhosts(chMap));
         myScanner.close();
    }
}
