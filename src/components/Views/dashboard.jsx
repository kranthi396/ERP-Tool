import React from 'react'

function dashboard() {

    const type = localStorage.getItem("type")


    if (type == "student")
        return (
            <div>
                <div class="text-center">
                    <h2>Welcome </h2>
                </div>
                <div class="bg-primary text-dark " style={{ padding: "45pt" }} >

                    <div class="container ">
                        <h3>Features</h3>

                        <ul class="border border-dark rounded" style={{ fontSize: "15pt" }}>
                            <li>
                                <b>E-Notes</b> : E-Notes is a module where student can find
                                notes  and youtube video links of all subject which will be uploaded by
                                faculty’s.
                            </li>
                            <li>
                                <b>Q-Bank</b> : Q-Bank is a module where student can find
                                model question papers links of all subject which will be uploaded by faculty’s.
                            </li>
                            <li>
                                <b>Grievance</b> : Grievance is a module where student  can give a complaint
                                which you will be facing problem in college and the complaint will be reached to HOD of the department.
                            </li>
                            <li>
                                <b>Achievement</b> : Achievement is a module where student can enter details of
                                their achievements with the description and link of the certificate, You can perform delete operation also.
                            </li>
                            <li>
                                <b>My Profile</b> : My Profile consist of student basic details followed by Name, USN, Email-ID,
                                etc., and where student can update the data which is necessary.
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        )

    else if (type == "faculty")
        return (
            <div>
                <div class="text-center">
                    <h2>Welcome </h2>
                </div>
                <div class="bg-primary" style={{ padding: "35pt" }}>

                    <div class="container ">
                        <h3>Features</h3>

                        <ul class="border border-dark rounded" style={{ fontSize: "15pt" }}>
                            <li>
                                <b>E-Notes</b> : E-Notes is a module where faculty can add
                                notes and youtube video links of required subject which is needed by the student.
                            </li>
                            <li>
                                <b>Q-Bank</b> : Q-Bank is a module where faculty can add
                                model question paper links of required subject which can be uploded through.
                            </li>
                            <li>
                                <b>Grievance</b> : Grievance is a module where faculty  can give a complaint
                                which you will be facing problem in college and the complaint will be reached to HOD of
                                the department.
                            </li>
                            <li>
                                <b>Achievement</b> : Achievement is a module where faculty can enter details of
                                their achievements with the description and link of the certificate, You can perform delete operation also.
                            </li>
                            <li>
                                <b>My Profile</b> :  My Profile consist of faculty basic details followed by Name, USN, Email-ID,
                                etc., and where faculty can update the data which is necessary.
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        )
    else
        return (
            <div>
                <div class="text-center">
                    <h2>Welcome </h2>
                </div>
                <div class="bg-primary" style={{ padding: "20pt" }}>

                    <div class="container ">
                        <h3>Features</h3>

                        <ul class="border border-dark rounded" style={{ fontSize: "15pt" }}>
                            <li>
                                <b>E-Notes</b> : E-Notes is a module where faculty can add
                                notes and youtube video links of required subject which is needed by the student.
                            </li>
                            <li>
                                <b>Q-Bank</b> : Q-Bank is a module where faculty can add
                                model question paper links of required subject which can be uploaded through.
                            </li>
                            <li>
                                <b>Grievance</b> : Grievance is a module where HOD can see all the complaints which
                                were given by the particular student and faculty.
                            </li>
                            <li>
                                <b>Achievement</b> : Achievement is a module where faculty can enter details of
                                their achievements with the description and link of the certificate, You can perform delete 
                                operation also.
                            </li>
                            <li>
                                <b>My Profile</b> : My Profile consist of faculty basic details followed by Name, USN, Email-ID,
                                etc., and where faculty can update the data which is necessary.
                            </li>
                            <li>
                                <b>Add Student</b> : Add student is a module where you can add the new student by using 
                                their basic details and providing them USN and password.
                            </li>
                            <li>
                                <b>Add Faculty</b> : Add faculty is a module where you can add the new faculty by using their basic details and
                                providing them F-ID and password.
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        )
}
export default dashboard
