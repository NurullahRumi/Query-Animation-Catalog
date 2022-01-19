/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.wavemaker.commons.json.serializer.ByteArrayToStringSerializer;
import com.wavemaker.commons.json.views.JsonViews.BlobAsUrlView;
import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcSy2110pk0GetImagecardForOrderResponse implements Serializable {


        @JsonView(BlobAsUrlView.class)
    @JsonSerialize(using = ByteArrayToStringSerializer.class)
    @JsonProperty(access = Access.READ_ONLY)
    @ColumnAlias("pOutDoc")
    private byte[] poutDoc;

    public byte[] getPoutDoc() {
        return this.poutDoc;
    }

    public void setPoutDoc(byte[] poutDoc) {
        this.poutDoc = poutDoc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcSy2110pk0GetImagecardForOrderResponse)) return false;
        final GetProcSy2110pk0GetImagecardForOrderResponse getProcSy2110pk0getImagecardForOrderResponse = (GetProcSy2110pk0GetImagecardForOrderResponse) o;
        return Objects.equals(getPoutDoc(), getProcSy2110pk0getImagecardForOrderResponse.getPoutDoc());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDoc());
    }
}