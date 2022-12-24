import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filterpipeassign",
  templateUrl: "./filterpipeassign.component.html",
  styleUrls: ["./filterpipeassign.component.css"],
})
export class FilterpipeassignComponent implements OnInit {
  namesearch;
  empArr = ([] = [
    {
      id: 101,
      name: "Mrs.Mansi",
      city: "Ambala",
      gender: "Female",
      dob:12/12/1968,
      department: "Computer Science",
      company: "Wipro",
      salary: 50000,
    },
    {
      id: 107,
      name: "Mr.Sanket",
      city: "Nanded",
      gender: "Male",
      dob:12/12/1990,
      department: "HR",
      company: "CISCO",
      salary: 45000,
    },
    

    {
      id: 108,
      name: "Mr.Ashish",
      city: "Delhi",
      gender: "Male",
      dob:12/12/1990,
      department: "IT",
      company: "Tech Mahindra",
      salary: 55000,
    },
    {
      id: 109,
      name: "Mrs.Pritija",
      city: "Shirdi",
      gender: "Female",
      dob:2/12/1996,
      department: "IT",
      company: "Metaverse",
      salary: 60000,
    },
    {
      id: 107,
      name: "Mr.Sanket",
      city: "Nanded",
      gender: "Male",
      dob:12/12/1998,
      department: "HR",
      company: "Deolite",
      salary: 45000,
    },
    {
      id: 103,
      name: "Mrs.Niharika",
      city: "Mumbai",
      gender: "Female",
      dob:11/1/1990,
      department: "IT",
      company: "Capgemini",
      salary: 70000,
    },
    {
      id: 107,
      name: "Mr.Aniket",
      city: "Nagpur",
      gender: "Male",
      dob:12/12/1989,
      department: "HR",
      company: "HITACHI",
      salary: 45000,
    },
    {
      id: 102,
      name: "Mrs.Tejaswini",
      city: "Karnataka",
      gender: "Female",
      dob:12/2/1980,
      department: "CSE",
      company: "Congizant",
      salary: 50000,
    },
  ]);
  constructor() {}

  ngOnInit() {}
}
