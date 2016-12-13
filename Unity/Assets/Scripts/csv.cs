﻿// This code automatically generated by TableCodeGen
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class csv : MonoBehaviour {
public TextAsset File;

	void FixedUpdate()
	{
		Load(File);
	}
		public class Row

		{
			public string roll;
			public string pitch;
			public string yaw;

		}

		List<Row> rowList = new List<Row>();
		bool isLoaded = false;

		public bool IsLoaded()
		{
			return isLoaded;
		}

		public List<Row> GetRowList()
		{
			return rowList;
		}

		public void Load(TextAsset csv)
		{
			rowList.Clear();
			string[][] grid = CsvParser2.Parse(csv.text);
			for(int i = 1 ; i < grid.Length ; i++)
			{
				Row row = new Row();
				row.roll = grid[i][0];
				row.pitch = grid[i][1];
				row.yaw = grid[i][2];

				rowList.Add(row);
			}
			isLoaded = true;
		}

		public int NumRows()
		{
			return rowList.Count;
		}

		public Row GetAt(int i)
		{
			if(rowList.Count <= i)
				return null;
			return rowList[i];
		}

		public Row Find_roll(string find)
		{
			return rowList.Find(x => x.roll == find);
		}
		public List<Row> FindAll_roll(string find)
		{
			return rowList.FindAll(x => x.roll == find);
		}
		public Row Find_pitch(string find)
		{
			return rowList.Find(x => x. pitch == find);
		}
		public List<Row> FindAll_pitch(string find)
		{
			return rowList.FindAll(x => x. pitch == find);
		}
		public Row Find_yaw(string find)
		{
			return rowList.Find(x => x. yaw == find);
		}
		public List<Row> FindAll_yaw(string find)
		{
			return rowList.FindAll(x => x. yaw == find);
		}
	}

