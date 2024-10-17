import React from "react";
import { Table, Button, Select, Input,Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";



const { Option } = Select;

const TimesheetComponent = () => {

  const columns = [
    {
      title: () => (
        <div style={{ textAlign: "left", fontWeight: "bold" }}>Client</div>
      ),
      dataIndex: "client",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            defaultValue="Select Client"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Client 1</Option>
            <Option value="2">Client 2</Option>
            <Option value="3">Client 3</Option>
          </Select>
          <Select
            defaultValue="Select Client"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Client 1</Option>
            <Option value="2">Client 2</Option>
            <Option value="3">Client 3</Option>
          </Select>
          <Select defaultValue="Select Client" style={{ width: "100%" }}>
            <Option value="1">Client 1</Option>
            <Option value="2">Client 2</Option>
            <Option value="3">Client 3</Option>
          </Select>
        </div>
      ),
    },
    {
      title: () => (
        <div style={{ textAlign: "left", fontWeight: "bold" }}>Project</div>
      ),
      dataIndex: "project",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            defaultValue="Select Project"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Project 1</Option>
            <Option value="2">Project 2</Option>
            <Option value="3">Project 3</Option>
          </Select>
          <Select
            defaultValue="Select Project"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Project 1</Option>
            <Option value="2">Project 2</Option>
            <Option value="3">Project 3</Option>
          </Select>
          <Select defaultValue="Select Project" style={{ width: "100%" }}>
            <Option value="1">Project 1</Option>
            <Option value="2">Project 2</Option>
            <Option value="3">Project 3</Option>
          </Select>
        </div>
      ),
    },
    {
      title: () => (
        <div style={{ textAlign: "left", fontWeight: "bold" }}>Activity</div>
      ),
      dataIndex: "activity",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            defaultValue="Select Activity"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Activity 1</Option>
            <Option value="2">Activity 2</Option>
            <Option value="3">Activity 3</Option>
          </Select>
          <Select
            defaultValue="Select Activity"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Activity 1</Option>
            <Option value="2">Activity 2</Option>
            <Option value="3">Activity 3</Option>
          </Select>
          <Select defaultValue="Select Activity" style={{ width: "100%" }}>
            <Option value="1">Activity 1</Option>
            <Option value="2">Activity 2</Option>
            <Option value="3">Activity 3</Option>
          </Select>
        </div>
      ),
    },
    {
      title: "29, Mon",
      dataIndex: "day1",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: "30, Tue",
      dataIndex: "day2",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: "31, Wed",
      dataIndex: "day3",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: "01, Thurs",
      dataIndex: "day4",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: "02, Fri",
      dataIndex: "day5",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: "03, Sat",
      dataIndex: "day6",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: "04, Sun",
      dataIndex: "day7",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder="Total Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input
            placeholder="Total Hrs"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Input placeholder="Total Hrs" style={{ width: "100%" }} />
        </div>
      ),
    },
    {
      title: () => (
        <div style={{ textAlign: "left", fontWeight: "bold" }}>Status</div>
      ),
      dataIndex: "Status",
      render: () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            defaultValue="Pending"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Pending 1</Option>
            <Option value="2">Pending 2</Option>
            <Option value="3">Pending 3</Option>
          </Select>
          <Select
            defaultValue="Pending"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <Option value="1">Pending 1</Option>
            <Option value="2">Pending 2</Option>
            <Option value="3">Pending 3</Option>
          </Select>
          <Select defaultValue="Pending" style={{ width: "100%" }}>
            <Option value="1">Pending 1</Option>
            <Option value="2">Pending 2</Option>
            <Option value="3">Pending 3</Option>
          </Select>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      client: "",
      project: "",
      activity: "",
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: "",
      total: "",
      status: "Pending",
    },
    // More rows can be added dynamically
  ];

  return (
    <>
      <div style={{textAlign:'top',padding:'30px 0'  }}>
        {" "}
        {/* Add 30% viewport height as padding */}
        <Table columns={columns} dataSource={data} pagination={false} />
        <Button type="dashed" style={{ marginTop: "10px", color: "blue" }}>
          + Add Row
        </Button>
      </div>
      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #ddd",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div>
       
          <span><strong>Total Hours</strong></span>
          <span style={{display: 'inline-block',marginLeft:'420px'}}>0</span>
          <span style={{display: 'inline-block',marginLeft:'145px'}}>8</span>
          <span style={{display: 'inline-block',marginLeft:'135px'}}>0</span>
          <span style={{display: 'inline-block',marginLeft:'130px'}}>0</span>
          <span style={{display: 'inline-block',marginLeft:'135px'}}>0</span>
          <span style={{display: 'inline-block',marginLeft:'135px'}}>0</span>
          <span style={{display: 'inline-block',marginLeft:'135px',marginRight:'150px'}}>0</span>
          <span style={{display: 'inline-block',marginLeft:'5px'}}>8</span>
          </div>

          
          {/* <span style={{marginLeft:'100px',marginRight:'150px'}}>8</span> */}
        </div>
    </>
  );
};

export default TimesheetComponent;



