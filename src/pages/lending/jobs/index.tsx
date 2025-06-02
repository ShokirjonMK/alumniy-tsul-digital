import React from "react";
import { Card, Pagination, Tag, List } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FaAlignLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const jobData = [
    {
        id: 1,
        title: "Legal Advisor",
        employer: "TSUL Law Office",
        type: "Full-time",
        location: "Tashkent, Uzbekistan",
        description:
            "Provide legal guidance to clients on civil and corporate matters. Review contracts and represent clients in court.",
    },
    {
        id: 2,
        title: "Internship – Legal Research Assistant",
        employer: "Uzbekistan Legal Foundation",
        type: "Full-time",
        location: "Samarkand, Uzbekistan",
        description:
            "Assist in research and drafting legal briefs for public interest cases. Ideal for students.",
    },
    {
        id: 3,
        title: "Legal Internship",
        employer: "Uzbekistan Legal Foundation",
        type: "Part-time",
        location: "Samarkand, Uzbekistan",
        description:
            "Assist in research and drafting legal briefs for public interest cases. Ideal for students.",
    },
    {
        id: 4,
        title: "Legal Internship",
        employer: "Uzbekistan Legal Foundation",
        type: "Full-time",
        location: "Samarkand, Uzbekistan",
        description:
            "Assist in research and drafting legal briefs for public interest cases. Ideal for students.",
    },
];

const Jobs: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 5;
    const total = jobData.length;

    const paginatedJobs = jobData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Opportunities</h1>
            {/* search jobs by title */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search jobs by title..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition duration-200"
                />
            </div>


            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={paginatedJobs}
                renderItem={(job) => (
                    <List.Item key={job.id}>
                        <Card
                            title={<span className="text-blue-600 text-lg font-semibold">{job.title}</span>}
                            extra={<Tag style={{ fontSize: "16px" }} color={job.type === "Full-time" ? "blue" : "green"}>{job.type}</Tag>}
                        >
                            <p className="mb-1 font-medium">
                                <span className="text-gray-600">Employer:</span> {job.employer}
                            </p>
                            <p className="mb-1 text-gray-600">
                                <EnvironmentOutlined className="mr-1" /> {job.location}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {job.description}
                            </p>
                        </Card>
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
        </div>
    );
};

export default Jobs;
