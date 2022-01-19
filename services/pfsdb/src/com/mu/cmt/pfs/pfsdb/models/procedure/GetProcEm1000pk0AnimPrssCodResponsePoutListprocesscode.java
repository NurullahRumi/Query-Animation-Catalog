/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcEm1000pk0AnimPrssCodResponsePoutListprocesscode implements Serializable {


    @ColumnAlias("PROCESSGROUP")
    private String processgroup;

    @ColumnAlias("PROCCODE")
    private String proccode;

    @ColumnAlias("PROCESS")
    private String process;

    @ColumnAlias("PROCESSNAME")
    private String processname;

    public String getProcessgroup() {
        return this.processgroup;
    }

    public void setProcessgroup(String processgroup) {
        this.processgroup = processgroup;
    }

    public String getProccode() {
        return this.proccode;
    }

    public void setProccode(String proccode) {
        this.proccode = proccode;
    }

    public String getProcess() {
        return this.process;
    }

    public void setProcess(String process) {
        this.process = process;
    }

    public String getProcessname() {
        return this.processname;
    }

    public void setProcessname(String processname) {
        this.processname = processname;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcEm1000pk0AnimPrssCodResponsePoutListprocesscode)) return false;
        final GetProcEm1000pk0AnimPrssCodResponsePoutListprocesscode getProcEm1000pk0animPrssCodResponsePoutListprocesscode = (GetProcEm1000pk0AnimPrssCodResponsePoutListprocesscode) o;
        return Objects.equals(getProcessgroup(), getProcEm1000pk0animPrssCodResponsePoutListprocesscode.getProcessgroup()) &&
                Objects.equals(getProccode(), getProcEm1000pk0animPrssCodResponsePoutListprocesscode.getProccode()) &&
                Objects.equals(getProcess(), getProcEm1000pk0animPrssCodResponsePoutListprocesscode.getProcess()) &&
                Objects.equals(getProcessname(), getProcEm1000pk0animPrssCodResponsePoutListprocesscode.getProcessname());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProcessgroup(),
                getProccode(),
                getProcess(),
                getProcessname());
    }
}