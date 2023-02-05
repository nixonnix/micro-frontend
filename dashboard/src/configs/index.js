export const routeToComponentMap = {
  "/": {
    widgets: [
      {
        id: "RecentOrdersWidget",
      },
      {
        id: "DepositsWidget",
      },
      {
        id: "TodayWidget",
      },
    ],
  },
  "/details": {
    widgets: [
      {
        id: "TodayWidget",
        layout: {
          xs: 12,
          md: 8,
          lg: 9,
        },
        height: '200px'
      },
      {
        id: "DepositsWidget",
        layout: {
          xs: 12,
          md: 4,
          lg: 3,
        },
        height: '200px'
      },
      {
        id: "RecentOrdersWidget",
        layout: {
          xs: 12,
        },
      }
    ],
  },
};
