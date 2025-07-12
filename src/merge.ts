/**
 * @param colection_1 - sorted DESC (max -> min)
 * @param colection_2 - sorted ASC (min -> max)
 * @param colection_3 - sorted ASC (min -> max)
 */

export function merge(
    colection_1:number[], 
    colection_2:number[], 
    colection_3:number[]): number[]{

    const result:number[] = [];
    const allColection = [...colection_2, ...colection_3, ...colection_1];
    const n = allColection.length;

    //insertion sort
    for (let i = 1; i < n; i++){
        const current = allColection[i];
        let j = i - 1;

        //shift greater value to right value
        while(j >= 0 && allColection[j] > current){
            allColection[j+1] = allColection[j];
            j--;
        }
        allColection[j + 1] = current
    }

    return allColection
}

