import { FC } from "react";
import { useAuth } from "../../../store";
import { Divider } from "antd";

const EduInfo: FC = () => {
  const user = useAuth(p => p.user);
  const userData: any = user

  return (
    <div className="profile_edit_forms">
      <div className="profile_edit_title text-lg font-semibold">
        <span>Ta'lim tafsiloti</span>
      </div>
      <div className="profile_edit_info_">
        <div className="profile_edit_info_col grid grid-cols-2 gap-y-4 gap-x-12 mt-4">
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Ta'lim turi:</p>
              <div className="profile_edit_info_val">
                {userData?.eduType?.name}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Ta'lim shakli:</p>
              <div className="profile_edit_info_val">
                {userData?.eduForm?.name}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Fakultet:</p>
              <div className="profile_edit_info_val">
                {userData?.faculty?.name}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Yo'nalish:</p>
              <div className="profile_edit_info_val">
                {userData?.direction?.name}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">To'lov shakli:</p>
              <div className="profile_edit_info_val">
                {userData?.is_contract ? "Grant" : "Kontrakt"}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Ta'lim yili:</p>
              <div className="profile_edit_info_val">
                {userData?.eduYear?.name}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Kurs:</p>
              <div className="profile_edit_info_val">
                {userData?.course?.name}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Ta'lim rejasi:</p>
              <div className="profile_edit_info_val">
                {userData?.eduPlan?.name}
              </div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
          <div className="profile_edit_info_student_items">
            <div className="profile_edit_info_student flex-between gap-2">
              <p className="profile_edit_label font-medium text-slate-400">Ta'lim tili:</p>
              <div className="profile_edit_info_val">--</div>
            </div>
            <Divider style={{ margin: "4px 0" }} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default EduInfo;
