# Project Setup

## Installation
To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone <clone url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Create a `.env.local` file and store the `BASE_URL`:
   ```
   BASE_URL=<your_base_url>
   ```

---

## Features Completed

- **Toggle Cards and Analytics Component**: Added toggling functionality for cards and analytics component.
- **Rate Limiting**: Implemented rate limiting to control API requests.
- **Dark Mode**: Integrated dark mode support.
- **Transition Animations**: Smooth animations when toggling UI components.
- **Error Handling**: Added robust error handling for better user experience.
- **Responsive Design**: Ensured compatibility across all devices.
- **Performance Optimization**: Used `useCallback` and `useMemo` to optimize re-renders.

---

## Bar Chart Scaling

- The dataset contains properties with large differences in values (e.g., one property has `25,000` while others are below `1,000`).
- Implemented a **scaling factor method** to ensure all values are visible in bar charts.

---

## Libraries Used

- **Styling**: Tailwind CSS
- **Data Fetching & State Management**:
  - TanStack Query (React Query)
  - Axios
  - Axios Rate Limiting
- **Charts**: Recharts

---

## React Hooks Used

- `useState`
- `useCallback`
- `useContext`

