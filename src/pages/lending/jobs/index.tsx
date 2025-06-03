import React, { useState } from "react";
import { Card, Pagination, Tag, List, Modal } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FaArrowRight } from "react-icons/fa6";

const jobData = [
    {
        id: 1,
        title: "Legal Advisor",
        employer: "TSUL Law Office",
        type: "Full-time",
        location: "Tashkent, Uzbekistan",
        description:
            "Provide legal guidance to clients on civil and corporate matters. Review contracts and represent clients in court.",
        requirements: [
            "Law degree from accredited university",
            "3+ years of legal practice experience",
            "Strong knowledge of Uzbek civil and corporate law",
            "Excellent communication and negotiation skills"
        ],
        salary: "Competitive salary based on experience",
        deadline: "2023-12-15"
    },
    {
        id: 2,
        title: "Internship – Legal Research Assistant",
        employer: "Uzbekistan Legal Foundation",
        type: "Full-time",
        location: "Samarkand, Uzbekistan",
        description:
            "Assist in research and drafting legal briefs for public interest cases. Ideal for students.",
        requirements: [
            "Currently enrolled in law school",
            "Strong research and writing skills",
            "Interest in public interest law",
            "Ability to work 20 hours per week"
        ],
        salary: "Stipend available",
        deadline: "2023-11-30"
    },
    {
        id: 3,
        title: "Legal Internship - Legal Research Assistant",
        employer: "Uzbekistan Legal Foundation",
        type: "Full-time",
        location: "Tashkent, Uzbekistan",
        description:
            "Assist in research and drafting legal briefs for public interest cases. Ideal for students.",
        requirements: [
            "Currently enrolled in law school",
            "Strong research and writing skills",
            "Interest in public interest law",
            "Ability to work 20 hours per week"
        ],
        salary: "Stipend available",
        deadline: "2023-11-30"
    },
    {
        id: 4,
        title: "Corporate Lawyer",
        employer: "TSUL Law Office",
        type: "Full-time",
        location: "Tashkent, Uzbekistan",
        description:
            "Provide legal guidance to clients on civil and corporate matters. Review contracts and represent clients in court.",
        requirements: [
            "Law degree from accredited university",
            "3+ years of legal practice experience",
            "Strong knowledge of Uzbek civil and corporate law",
            "Excellent communication and negotiation skills"
        ],
        salary: "Competitive salary based on experience",
        deadline: "2023-12-15"
    }
];

const Jobs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const pageSize = 5;
    const total = jobData.length;

    const paginatedJobs = jobData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handleJobClick = (job: any) => {
        setSelectedJob(job);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Opportunities</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search jobs by title..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition duration-200"
                />
            </div>

            <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={paginatedJobs}
                renderItem={(job) => (
                    <List.Item key={job.id}>
                        <div
                            onClick={() => handleJobClick(job)}
                            className="w-full cursor-pointer"
                        >
                            <Card
                                title={<span className="text-blue-600 text-lg font-semibold">{job.title}</span>}
                                extra={<Tag style={{ fontSize: "16px" }} color={job.type === "Full-time" ? "blue" : "green"}>{job.type}</Tag>}
                                className="h-[200px] hover:shadow-lg transition-shadow duration-200"
                            >
                                <p className="mb-1 font-medium">
                                    <span className="text-gray-600">Employer:</span> {job.employer}
                                </p>
                                <p className="mb-1 text-gray-600">
                                    <EnvironmentOutlined className="mr-1" /> {job.location}
                                </p>
                                <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                                    {job.description}
                                </p>
                            </Card>
                        </div>
                    </List.Item>
                )}
            />

            <div className={window.location.pathname !== "/jobs" ? "flex justify-between mt-8" : "flex justify-center mt-8"}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={total}
                    onChange={(page) => setCurrentPage(page)}
                />
                {window.location.pathname !== "/jobs" && (
                    <button
                        onClick={() => (window.location.href = "/jobs")}
                        className="flex items-center gap-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-md text-sm"
                    >
                        Full Job List <FaArrowRight />
                    </button>
                )}
            </div>

            {/* Job Details Modal */}
            <Modal
                title={<span className="text-xl font-bold">{selectedJob?.title}</span>}
                open={isModalVisible}
                onCancel={handleModalClose}
                footer={[
                    <button
                        key="apply"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Apply Now
                    </button>
                ]}
                width={800}
            >
                {selectedJob && (
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold">{selectedJob.employer}</h3>
                                <p className="text-gray-600">
                                    <EnvironmentOutlined className="mr-1" /> {selectedJob.location}
                                </p>
                            </div>
                            <Tag color={selectedJob.type === "Full-time" ? "blue" : "green"} className="text-base">
                                {selectedJob.type}
                            </Tag>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-800">Job Description:</h4>
                            <p className="text-gray-700 mt-1">{selectedJob.description}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800">Requirements:</h4>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                {selectedJob.requirements?.map((req: string, index: number) => (
                                    <li key={index} className="text-gray-700">{req}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <h4 className="font-semibold text-gray-800">Salary:</h4>
                                <p className="text-gray-700">{selectedJob.salary}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Application Deadline:</h4>
                                <p className="text-gray-700">{selectedJob.deadline}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Jobs;