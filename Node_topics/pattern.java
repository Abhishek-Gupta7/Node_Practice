class Patter{
    public static void main(String[] args) {


int j = 7;
int mid = (j/2) + 1;
int start = mid;
int end = mid;

for (int i = 1 ; i <= j ; i++){
    
  for(int k = 1 ; k <= j ; k++){
    //  System.out.println("start"+start+"end"+end+"k"+k);
       if(k == mid){
           if(start == mid && end == mid){
              System.out.print("*\t");
                break;
           }
          System.out.print("*\t");
       }else if (i == mid){
            System.out.print("*\t");
            continue;
       }else if (start == k){
          System.out.print("*\t");
      }else if(end == k){
         System.out.print("*\t");
      }else{
         System.out.print("\t");
      }
  }
  if (i >= mid) {
    start+=1;
    end-=1;
  } else {
    start-=1;
    end+=1;
  }
  System.out.println();
}
    }
}