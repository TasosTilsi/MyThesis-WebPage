<img src="https://github.com/TasosTilsi/MyThesis-Android-App/blob/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"/> <img src="https://github.com/TasosTilsi/MyThesis-Android-App/blob/master/app/src/main/res/drawable/teiser_logo.png"/>
<br/>
<h1>MyThesis WebPage</h1>
<h3>Title</h3>
<p> Development of an application for the Implemantation and use of search methods in a visualized environment</p>
<h3>Live</h3>
Click <a href="https://git.io/feqfK">here</a> to check this web app live!
<h3>Description</h3>
This is an Web Page developed for my thesis!

I developed this application for educational reasons and I am trying to show how some of the searches work in an array!

The searches that I have implemented are:
<ul>
<li>Linear Search</li>
<li>Binary Search</li>
<li>Jump Search</li>
<li>Interpolation Search</li>
<li>Exponential Search</li>
<li>Fibonacci Search</li>
</ul>

<h4>Linear Search</h4>

<b>Little Words:</b>

It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched.

<b>Algorithm:</b>

<ul>
<li>Start from the leftmost element of arr[] and one by one compare x with each element of arr[]</li>
<li>If x matches with an element, return the index. </li>
<li>If x doesn’t match with any of elements, return -1.</li>
</ul>

<b>Code:</b>

```c
// C code for linearly search x in arr[].  
// If x is present  then return its  location,  otherwise
// return -1\n
int linearSearch(int arr[], int n, int x)
{
    int i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}
```
        
        
<h4>Binary Search</h4>

<b>Little Words:</b>

Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

<b>Algorithm:</b>

We basically ignore half of the elements just after one comparison.
<ol>
<li>Compare x with the middle element.</li>
<li>If x matches with middle element, we return the mid index. </li>
<li>Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element.  So we recur for right half.</li>
<li> Else (x is smaller) recur for the left half.</li>
</ol>

<b>Code:</b>

```c
int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l)/2;
        
        // If the element is present at the middle itself
        
        if (arr[mid] == x)
            return mid;
            
            // If element is smaller than mid, then it can only 
            //be present in left subarray
            
        if (arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);
        
        // Else the element can only be present in right subarray
            
        return binarySearch(arr, mid+1, r, x);\n" +
    }
        
    // We reach here when element is not present in array
    
    return -1;
}
```

<h4>Jump Search</h4>

<b>Little Words:</b>

The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.

<b>Algorithm:</b>

For example, suppose we have an array arr[] of size n and block (to be jumped) size m. Then we search at the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x.

<b>Code:</b>

```c
int jumpSearch(int arr[], int x, int n)
{
    // Finding block size to be jumped
    int step = sqrt(n);
    
    //Finding the block where element is present (if it is present)
    int prev = 0;
    while (arr[min(step, n)-1] < x)
    {
        prev = step;
        step += sqrt(n);
        if (prev >= n)
            return -1;
    }
    
    // Doing a linear search for x in block beginning with prev.
    while (arr[prev] < x)
    {
        prev++;
        // If we reached next block or end of array, element is not present.
        if (prev == min(step, n))
            return -1;
    }
    // If element is found
    
    if (arr[prev] == x)
        return prev;
        
    return -1;
    }
}
```

<h4>Interpolation Search</h4>

<b>Little Words:</b>

This search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched.

<b>Algorithm:</b>

```
// The idea of formula is to return higher value of pos
        // when element to be searched is closer to arr[hi]. And
        // smaller value when closer to arr[lo]
        pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]
       
        arr[] ==> Array where elements need to be searched
        x     ==> Element to be searched
        lo    ==> Starting index in arr[]
        hi    ==> Ending index in arr[]
```

Rest of the Interpolation algorithm is same except the above partition logic.

<ol>
<li>In a loop, calculate the value of “pos” using the probe position formula. </li>
<li>If it is a match, return the index of the item, and exit.</li>
<li>If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise calculate the same in the right sub-array.</li>
<li>Repeat until a match is found or the sub-array reduces to zero.</li>
</ol>

<b>Code:</b>

```c
// If x is present in arr[0..n-1], then returns
// index of it, else returns -1.
int interpolationSearch(int arr[], int n, int x)
{
    // Find indexes of two corners
    int lo = 0, hi = (n - 1);
    // Since array is sorted, an element present
    // in array must be in range defined by corner
    while (lo <= hi && x >= arr[lo] && x <= arr[hi])
    {
        // Probing the position with keeping
        // uniform distribution in mind.
        int pos = lo + (((double)(hi-lo) / (arr[hi]-arr[lo]))*(x - arr[lo]));
        // Condition of target found
        if (arr[pos] == x)
            return pos;
        // If x is larger, x is in upper part
        if (arr[pos] < x)
            lo = pos + 1;
        // If x is smaller, x is in the lower part
        else
            hi = pos - 1;\n" +
    }
    return -1;
}
```

<h4>Exponential Search</h4>

<b>Little Words:</b>

There are numerous ways to implement this with the most common being to determine a range that the search key resides in and performing a binary search within that range.

<b>Algorithm:</b>

Exponential search allows for searching through a sorted, unbounded list for a specified input value (the search \"key\"). The algorithm consists of two stages. The first stage determines a range in which the search key would reside if it were in the list. In the second stage, a binary search is performed on this range. In the first stage, assuming that the list is sorted in ascending order, the algorithm looks for the first exponent, j, where the value 2^j is greater than the search key. This value, 2^j becomes the upper bound for the binary search with the previous power of 2, 2^j - 1, being the lower bound for the binary search.In each step, the algorithm compares the search key value with the key value at the current search index. If the element at the current index is smaller than the search key, the algorithm repeats, skipping to the next search index by doubling it, calculating the next power of 2. If the element at the current index is larger than the search key, the algorithm now knows that the search key, if it is contained in the list at all, is located in the interval formed by the previous search index, 2^j - 1, and the current search index, 2^j. The binary search is then performed with the result of either a failure, if the search key is not in the list, or the position of the search key in the list.
        
<b>Code:</b>

```c
// Returns position of first ocurrence of x in array

int exponentialSearch(int arr[], int n, int x)
{
    // If x is present at first location itself\n" +
    if (arr[0] == x)
        return 0;
    // Find range for binary search by repeated doubling
    int i = 1;
    while (i < n && arr[i] <= x)
    {
        i = i*2;
        //  Call binary search for the found range.
        return binarySearch(arr, i/2, min(i, n), x);
    }
}

// A recursive binary search function. It returns location of x in 
// given array arr[l..r] is present, otherwise -1

int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l)/2;
        //If the element is present at the middle itself
        if (arr[mid] == x)
            return mid;
        // If element is smaller than mid, then it
        // can only be present n left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);\n" +
        
        // Else the element can only be present in right subarray
        return binarySearch(arr, mid+1, r, x);
    }
    // We reach here when element is not present in array
    return -1;
}
```

<h4>Fibonacci Search</h4>

<b>Little Words:</b>

Fibonacci Search is a comparison-based technique that uses Fibonacci numbers to search an element in a sorted array.

<b>Algorithm:</b>

Let arr[0..n-1] be the input array and element to be searched be x.
<ol>
<li>Find the smallest Fibonacci Number greater than or equal to n. Let this number be fibM [m’th Fibonacci Number]. Let the two Fibonacci numbers preceding it be fibMm1 [(m-1)’th Fibonacci Number] and fibMm2 [(m-2)’th Fibonacci Number].</li>
<li>While the array has elements to be inspected:
<ol>
<li>Compare x with the last element of the range covered by fibMm2</li>
<li><strong>If</strong> x matches, return index</li>
<li><strong>Else If</strong>  x is less than the element, move the three Fibonacci variables two Fibonacci down, indicating elimination of approximately rear two-third of the remaining array.</li>
<li><strong>Else</strong> x is greater than the element, move the three Fibonacci variables one Fibonacci down. Reset offset to index. Together these indicate elimination of approximately front one-third of the remaining array.</li>
</ol>
</li>
<li>Since there might be a single element remaining for comparison, check if fibMm1 is 1. If Yes,  compare x with that remaining element. If match, return index.</li>
</ol>
        
<b>Code:</b>

```c
/* Returns index of x if present,  else returns -1 */
int fibMonaccianSearch(int arr[], int x, int n)
{
    /* Initialize fibonacci numbers */
    
    int fibMMm2 = 0;   // (m-2)'th Fibonacci No.
    int fibMMm1 = 1;   // (m-1)'th Fibonacci No.
    int fibM = fibMMm2 + fibMMm1;  // m'th Fibonacci
    
    /* fibM is going to store the smallest 
    Fibonacci Number greater than or equal to n */
    
    while (fibM < n)
    {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM  = fibMMm2 + fibMMm1;
    }
    // Marks the eliminated range from front
    int offset = -1;
    
    /* while there are elements to be inspected. Note that
    we compare arr[fibMm2] with x. When fibM becomes 1,
    fibMm2 becomes 0 */
    while (fibM > 1)
    {
    // Check if fibMm2 is a valid location
        int i = min(offset+fibMMm2, n-1);
        
    /* If x is greater than the value at index fibMm2,
    cut the subarray array from offset to i */
    
        if (arr[i] < x)
        {
            fibM  = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        }
        
        /* If x is greater than the value at index fibMm2,
        cut the subarray after i+1  */
        
        else if (arr[i] > x)
        {
            fibM  = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        }
        
        /* element found. return index */
        else return i;
    }
    
    /* comparing the last element with x */
    if(fibMMm1 && arr[offset+1]==x)
        return offset+1;
    /*element not found. return -1 */
    return -1;
}
```

Thanks for the documentation <a href="https://www.geeksforgeeks.org/searching-algorithms/">Geeks For Geeks</a>,<a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia</a>

<h3>License</h3>
Copyright &copy; <a href="https://git.io/vNjE6">TasosTilsi</a>, <a href="http://informatics.teicm.gr/">University Of Applied Sciences of Central Macedonia&reg;</a>

        MIT License
        Copyright © 2018 Anastasios Tilsizoglou

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
