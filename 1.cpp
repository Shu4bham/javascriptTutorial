#include <iostream>

using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int y, x;
        cin >> y >> x;

        long long layer = max(x, y);  // Find the layer in which the coordinate (x, y) is located
        long long start = (layer - 1) * (layer - 1) + 1;  // Calculate the starting value of the layer
        long long end = layer * layer;  // Calculate the ending value of the layer

        if (layer % 2 == 0) {
            // If the layer is even, swap the x and y coordinates
            swap(x, y);
        }

        long long result;

        if (x == layer) {
            result = end - y + 1;
        } else {
            result = start + x - 1;
        }

        cout << result << endl;
    }

    return 0;
}
