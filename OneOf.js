let oneOf = (x, y, w, h) => {
  let temp = round(random(1, 4));

  if (temp == 1) return x;
  else if (temp == 2) return y;
  else if (temp == 3) return w;
  else if (temp == 4) return h;
};
