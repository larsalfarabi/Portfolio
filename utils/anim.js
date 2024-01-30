const transition = { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 10 };

export const height = {
  initial: {
    height: "100vh",
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },

  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),

  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};
