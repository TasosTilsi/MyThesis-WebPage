var manual = {
    LinearSearch: {
        title: "<b>Linear Search</b>",
        message: "<b>Little Words:</b>" +
        "</br>" +
        "It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched." +
        "</br></br>" +
        "<b>Algorithm:</b>" +
        "<ul>" +
        "<li>Start from the leftmost element of arr[] and one by one compare x with each element of arr[]</li>" +
        "<li>If x matches with an element, return the index. </li>" +
        "<li>If x doesn’t match with any of elements, return -1.</li>" +
        "</ul>" +
        "<b>Code:</b>" +
        "<pre class='prettyprint lang-c'><code>// C code for linearly search x in arr[].  If x \n" +
        "// is present  then return its  location,  otherwise\n" +
        "// return -1\n" +
        "int linearSearch(int arr[], int n, int x)\n" +
        "{\n" +
        "    int i;\n" +
        "    for (i = 0; i < n; i++)\n" +
        "        if (arr[i] == x)\n" +
        "         return i;\n" +
        "    return -1;\n" +
        "}</code></pre>"
    },
    BinarySearch: {
        title: "<b>Binary Search</b>",
        message: "<b>Little Words:</b>" +
        "</br>" +
        "Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty." +
        "</br></br>" +
        "<b>Algorithm:</b></br>" +
        "We basically ignore half of the elements just after one comparison." +
        "<ol>\n" +
        "<li>Compare x with the middle element. </li>\n" +
        "<li>If x matches with middle element, we return the mid index.  </li>\n" +
        "<li> Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element.  So we recur for right half. </li>\n" +
        "<li> Else (x is smaller) recur for the left half.</li>\n" +
        "</ol>" +
        "<b>Code:</b>" +
        "<pre class='prettyprint lang-c'><code> int binarySearch(int arr[], int l, int r, int x)\n" +
        "{\n" +
        "   if (r >= l)\n" +
        "   {\n" +
        "        int mid = l + (r - l)/2;\n" +
        " \n" +
        "        // If the element is present at the middle \n" +
        "        // itself\n" +
        "        if (arr[mid] == x)  \n" +
        "            return mid;\n" +
        " \n" +
        "        // If element is smaller than mid, then \n" +
        "        // it can only be present in left subarray\n" +
        "        if (arr[mid] > x) \n" +
        "            return binarySearch(arr, l, mid-1, x);\n" +
        " \n" +
        "        // Else the element can only be present\n" +
        "        // in right subarray\n" +
        "        return binarySearch(arr, mid+1, r, x);\n" +
        "   }\n" +
        " \n" +
        "   // We reach here when element is not \n" +
        "   // present in array\n" +
        "   return -1;\n" +
        "}</code></pre>"
    },
    JumpSearch: {
        title: "<b>Jump Search</b>",
        message: "<b>Little Words:</b>" +
        "</br>" +
        "The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements." +
        "</br></br>" +
        "<b>Algorithm:</b></br>" +
        "For example, suppose we have an array arr[] of size n and block (to be jumped) size m. Then we search at the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x." +
        "</br></br><b>Code:</b>" +
        "<pre class='prettyprint lang-c'><code> int jumpSearch(int arr[], int x, int n)\n" +
        "{\n" +
        "    // Finding block size to be jumped\n" +
        "    int step = sqrt(n);\n" +
        " \n" +
        "    // Finding the block where element is\n" +
        "    // present (if it is present)\n" +
        "    int prev = 0;\n" +
        "    while (arr[min(step, n)-1] < x)\n" +
        "    {\n" +
        "        prev = step;\n" +
        "        step += sqrt(n);\n" +
        "        if (prev >= n)\n" +
        "            return -1;\n" +
        "    }\n" +
        " \n" +
        "    // Doing a linear search for x in block\n" +
        "    // beginning with prev.\n" +
        "    while (arr[prev] < x)\n" +
        "    {\n" +
        "        prev++;\n" +
        " \n" +
        "        // If we reached next block or end of\n" +
        "        // array, element is not present.\n" +
        "        if (prev == min(step, n))\n" +
        "            return -1;\n" +
        "    }\n" +
        "    // If element is found\n" +
        "    if (arr[prev] == x)\n" +
        "        return prev;\n" +
        " \n" +
        "    return -1;\n" +
        "}" +
        "}</code></pre>"
    },
    InterpolationSearch: {
        title: "<b>Interpolation Search</b>",
        message: "<b>Little Words:</b>" +
        "</br>" +
        "This search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched. " +
        "</br></br>" +
        "<b>Algorithm:</b></br>" +
        "<pre class='prettyprint'>// The idea of formula is to return higher value of pos\n" +
        "// when element to be searched is closer to arr[hi]. And\n" +
        "// smaller value when closer to arr[lo]\n" +
        "pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]\n" +
        "\n" +
        "arr[] ==> Array where elements need to be searched\n" +
        "x     ==> Element to be searched\n" +
        "lo    ==> Starting index in arr[]\n" +
        "hi    ==> Ending index in arr[]</pre>" +
        "Rest of the Interpolation algorithm is same except the above partition logic.\n" +
        "<ol>\n" +
        "<li>In a loop, calculate the value of “pos” using the probe position formula.\n </li>\n" +
        "<li>If it is a match, return the index of the item, and exit.\n</li>\n" +
        "<li>If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise calculate the same in the right sub-array.</li>\n" +
        "<li>Repeat until a match is found or the sub-array reduces to zero.</li>\n" +
        "</ol>" +
        "<b>Code:</b>" +
        "<pre class='prettyprint lang-c'><code>// If x is present in arr[0..n-1], then returns\n" +
        "// index of it, else returns -1.\n" +
        "int interpolationSearch(int arr[], int n, int x)\n" +
        "{\n" +
        "    // Find indexes of two corners\n" +
        "    int lo = 0, hi = (n - 1);\n" +
        " \n" +
        "    // Since array is sorted, an element present\n" +
        "    // in array must be in range defined by corner\n" +
        "    while (lo <= hi && x >= arr[lo] && x <= arr[hi])\n" +
        "    {\n" +
        "        // Probing the position with keeping\n" +
        "        // uniform distribution in mind.\n" +
        "        int pos = lo + (((double)(hi-lo) /\n" +
        "              (arr[hi]-arr[lo]))*(x - arr[lo]));\n" +
        " \n" +
        "        // Condition of target found\n" +
        "        if (arr[pos] == x)\n" +
        "            return pos;\n" +
        " \n" +
        "        // If x is larger, x is in upper part\n" +
        "        if (arr[pos] < x)\n" +
        "            lo = pos + 1;\n" +
        " \n" +
        "        // If x is smaller, x is in the lower part\n" +
        "        else\n" +
        "            hi = pos - 1;\n" +
        "    }\n" +
        "    return -1;\n" +
        "}</code></pre>"
    },
    ExponentialSearch: {
        title: "<b>Exponential Search</b>",
        message: "<b>Little Words:</b>" +
        "</br>" +
        "There are numerous ways to implement this with the most common being to determine a range that the search key resides in and performing a binary search within that range" +
        "</br></br>" +
        "<b>Algorithm:</b></br>" +
        "<p>Exponential search allows for searching through a sorted, unbounded list for a specified input value (the search \"key\"). The algorithm consists of two stages. The first stage determines a range in which the search key would reside if it were in the list. In the second stage, a binary search is performed on this range. In the first stage, assuming that the list is sorted in ascending order, the algorithm looks for the first exponent, j, where the value 2^j is greater than the search key. This value, 2^j becomes the upper bound for the binary search with the previous power of 2, 2^j - 1, being the lower bound for the binary search." +
        "In each step, the algorithm compares the search key value with the key value at the current search index. If the element at the current index is smaller than the search key, the algorithm repeats, skipping to the next search index by doubling it, calculating the next power of 2. If the element at the current index is larger than the search key, the algorithm now knows that the search key, if it is contained in the list at all, is located in the interval formed by the previous search index, 2^j - 1, and the current search index, 2^j. The binary search is then performed with the result of either a failure, if the search key is not in the list, or the position of the search key in the list.</p>" +
        "<b>Code:</b>" +
        "<pre class='prettyprint lang-c'><code>// Returns position of first ocurrence of\n" +
        "// x in array\n" +
        "int exponentialSearch(int arr[], int n, int x)\n" +
        "{\n" +
        "    // If x is present at first location itself\n" +
        "    if (arr[0] == x)\n" +
        "        return 0;\n" +
        " \n" +
        "    // Find range for binary search by\n" +
        "    // repeated doubling\n" +
        "    int i = 1;\n" +
        "    while (i < n && arr[i] <= x)\n" +
        "        i = i*2;\n" +
        " \n" +
        "    //  Call binary search for the found range.\n" +
        "    return binarySearch(arr, i/2, min(i, n), x);\n" +
        "}" +
        "}</code></pre>" +
        "<pre class='prettyprint lang-c'><code>// A recursive binary search function. It returns\n" +
        "// location of x in  given array arr[l..r] is\n" +
        "// present, otherwise -1\n" +
        "int binarySearch(int arr[], int l, int r, int x)\n" +
        "{\n" +
        "    if (r >= l)\n" +
        "    {\n" +
        "        int mid = l + (r - l)/2;\n" +
        " \n" +
        "        // If the element is present at the middle\n" +
        "        // itself\n" +
        "        if (arr[mid] == x)\n" +
        "            return mid;\n" +
        " \n" +
        "        // If element is smaller than mid, then it\n" +
        "        // can only be present n left subarray\n" +
        "        if (arr[mid] > x)\n" +
        "            return binarySearch(arr, l, mid-1, x);\n" +
        " \n" +
        "        // Else the element can only be present\n" +
        "        // in right subarray\n" +
        "        return binarySearch(arr, mid+1, r, x);\n" +
        "    }\n" +
        " \n" +
        "    // We reach here when element is not present\n" +
        "    // in array\n" +
        "    return -1;\n" +
        "}</code></pre>"
    },
    FibonacciSearch: {
        title: "<b>Fibonacci Search</b>",
        message: "<b>Little Words:</b>" +
        "</br>" +
        "Fibonacci Search is a comparison-based technique that uses Fibonacci numbers to search an element in a sorted array." +
        "</br></br>" +
        "<b>Algorithm:</b></br>" +
        "Let arr[0..n-1] be the input array and element to be searched be x." +
        "<ol>\n" +
        "<li>Find the smallest Fibonacci Number greater than or equal to n. Let this number be fibM [m’th Fibonacci Number]. Let the two Fibonacci numbers preceding it be fibMm1 [(m-1)’th Fibonacci Number] and fibMm2 [(m-2)’th Fibonacci Number].</li>\n" +
        "<li>While the array has elements to be inspected:\n" +
        "<ol>\n" +
        "<li>Compare x with the last element of the range covered by fibMm2</li>\n" +
        "<li><strong>If</strong> x matches, return index</li>\n" +
        "<li><strong>Else If</strong>  x is less than the element, move the three Fibonacci variables two Fibonacci down, indicating elimination of approximately rear two-third of the remaining array.</li>\n" +
        "<li><strong>Else</strong> x is greater than the element, move the three Fibonacci variables one Fibonacci down. Reset offset to index. Together these indicate elimination of approximately front one-third of the remaining array.</li>\n" +
        "</ol>\n" +
        "</li>\n" +
        "<li>Since there might be a single element remaining for comparison, check if fibMm1 is 1. If Yes,  compare x with that remaining element. If match, return index.</li>\n" +
        "</ol>" +
        "<b>Code:</b>" +
        "<pre class='prettyprint lang-c'><code> /* Returns index of x if present,  else returns -1 */\n" +
        "int fibMonaccianSearch(int arr[], int x, int n)\n" +
        "{\n" +
        "    /* Initialize fibonacci numbers */\n" +
        "    int fibMMm2 = 0;   // (m-2)'th Fibonacci No.\n" +
        "    int fibMMm1 = 1;   // (m-1)'th Fibonacci No.\n" +
        "    int fibM = fibMMm2 + fibMMm1;  // m'th Fibonacci\n" +
        " \n" +
        "    /* fibM is going to store the smallest Fibonacci\n" +
        "       Number greater than or equal to n */\n" +
        "    while (fibM < n)\n" +
        "    {\n" +
        "        fibMMm2 = fibMMm1;\n" +
        "        fibMMm1 = fibM;\n" +
        "        fibM  = fibMMm2 + fibMMm1;\n" +
        "    }\n" +
        " \n" +
        "    // Marks the eliminated range from front\n" +
        "    int offset = -1;\n" +
        " \n" +
        "    /* while there are elements to be inspected. Note that\n" +
        "       we compare arr[fibMm2] with x. When fibM becomes 1,\n" +
        "       fibMm2 becomes 0 */\n" +
        "    while (fibM > 1)\n" +
        "    {\n" +
        "        // Check if fibMm2 is a valid location\n" +
        "        int i = min(offset+fibMMm2, n-1);\n" +
        " \n" +
        "        /* If x is greater than the value at index fibMm2,\n" +
        "           cut the subarray array from offset to i */\n" +
        "        if (arr[i] < x)\n" +
        "        {\n" +
        "            fibM  = fibMMm1;\n" +
        "            fibMMm1 = fibMMm2;\n" +
        "            fibMMm2 = fibM - fibMMm1;\n" +
        "            offset = i;\n" +
        "        }\n" +
        " \n" +
        "        /* If x is greater than the value at index fibMm2,\n" +
        "           cut the subarray after i+1  */\n" +
        "        else if (arr[i] > x)\n" +
        "        {\n" +
        "            fibM  = fibMMm2;\n" +
        "            fibMMm1 = fibMMm1 - fibMMm2;\n" +
        "            fibMMm2 = fibM - fibMMm1;\n" +
        "        }\n" +
        " \n" +
        "        /* element found. return index */\n" +
        "        else return i;\n" +
        "    }\n" +
        " \n" +
        "    /* comparing the last element with x */\n" +
        "    if(fibMMm1 && arr[offset+1]==x)return offset+1;\n" +
        " \n" +
        "    /*element not found. return -1 */\n" +
        "    return -1;\n" +
        "}</code></pre>"
    }
};