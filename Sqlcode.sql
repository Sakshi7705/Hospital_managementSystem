create database HMS1 
  use HMS1
  CREATE TABLE department([department_id] [int] NOT NULL PRIMARY KEY,
  [dep_name] [varchar](max) NOT NULL,
  [dep_head] [varchar](max) NOT NULL,);
CREATE TABLE employee([employee_id] [int] NOT NULL PRIMARY KEY,
  [employee_name] [varchar](max) NOT NULL,[DoB] [date] NOT NULL,
  [joinning_date] [date] NOT NULL,[emp_type] [varchar](max) NOT NULL,
  [email] [varchar](max) NOT NULL,[address] [varchar](max) NOT NULL,
  [salary] [int] NOT NULL,[date_of_leaveing] [date] NOT NULL,
  [department_id] [int] NOT NULL foreign key references [department]);
CREATE TABLE Medicine([medicine_id] [int] NOT NULL PRIMARY KEY,
  [medicine_name] [varchar](max) NOT NULL,
  [quantity] [int] NOT NULL,
  [date] [date] NOT NULL,
  [medicine_cost] [nchar](10) NOT NULL,
  [patient_id] [int] NOT NULL foreign key references [patient]);
CREATE TABLE patient([patient_id] [int] NOT NULL PRIMARY KEY,
  [patient_name] [varchar](max) NOT NULL,
  [phone_no] [varchar](max) NOT NULL,
  [blood_group] [varchar](max) NOT NULL,
  [email] [varchar](max) NOT NULL,
  [gender] [varchar](max) NOT NULL,
  [address] [varchar](max) NOT NULL,
  [disease] [varchar](max) NOT NULL,
  [arrival_date] [date] NOT NULL,
  [discharge_date] [date] NOT NULL,);
create table Bill(   [payment_id] [int] NOT NULL PRIMARY KEY,
  [date] [date] NOT NULL,[room_cost] [int] NOT NULL,
  [othercharge] [int] NULL,
  [mcost] [int] NOT NULL,
  [Total] [int] NOT NULL,
  [patient_id] [int] NOT NULL foreign key references [patient]);
CREATE TABLE doctor([doctor_id] [int] NOT NULL PRIMARY KEY,
  [qualification] [varchar](max) NOT NULL,[patient_id] [int] NOT NULL foreign key references [patient],
  [employee_id] [int] NOT NULL foreign key references [employee]);
CREATE TABLE nurse([nurse_id] [int] NOT NULL PRIMARY KEY,
  [patient_id] [int] NOT NULL foreign key references [patient],
  [employee_id] [int] NOT NULL foreign key references [employee]);
CREATE TABLE reletive([reletive_id] [int] NOT NULL PRIMARY KEY,
  [reletive_name] [varchar](max) NOT NULL,
  [reletive_contact] [varchar](max) NOT NULL,
  [relation] [varchar](max) NOT NULL,[patient_id] [int] NOT NULL foreign key references [patient]);
CREATE TABLE room([room_id] [int] NOT NULL PRIMARY KEY,
  [room_type] [varchar](max) NOT NULL,
  [patient_id] [int] NOT NULL foreign key references [patient],[room_cost] [int] NOT NULL);
CREATE TABLE Test(
  [test_id] [int] NOT NULL PRIMARY KEY,
  [test_name] [varchar](max) NOT NULL,
  [test_cost] [int] NOT NULL,
  [date] [date] NOT NULL,
  [patient_id] [int] NOT NULL foreign key references [patient]);
