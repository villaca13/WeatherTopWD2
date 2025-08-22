import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import * as fs from "fs";

export function initStore(dataType) {
  const store = {
    file: `./models/${dataType}.json`,
    [dataType]: [],
  };

  const db = new Low(new JSONFile(store.file));
  if (!fs.existsSync(store.file)) {
    fs.writeFileSync(store.file, JSON.stringify(store));
  }
  return db;
};

export function findMinMax(array, key) {
  try{
    const datas = array.map((node) => node[key]);
    return {
    min: Math.min(...datas),
    max: Math.max(...datas),
    }
  }catch (error) {
    return { min: -1, max: -1 };
  }
};

